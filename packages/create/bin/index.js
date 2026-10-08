#!/usr/bin/env node
// npm create @latitudelabs@latest [directory] [--no-install] [--pm npm|pnpm|yarn|bun] [--yes]
//
// Scaffolds a SvelteKit app wired to @latitudelabs/design-system. No dependencies on purpose:
// `npm create` should be fast and never break on a transitive install.

import { spawnSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import { createInterface } from 'node:readline/promises';
import { fileURLToPath } from 'node:url';

const here = path.dirname(fileURLToPath(import.meta.url));
const templateDir = path.resolve(here, '../template');
const { version } = JSON.parse(fs.readFileSync(path.resolve(here, '../package.json'), 'utf8'));

// npm strips these from published packages, so the template stores them with a leading underscore.
const RENAMES = { _gitignore: '.gitignore', _npmrc: '.npmrc' };
const TEXT_EXT = new Set(['.json', '.js', '.ts', '.svelte', '.css', '.md', '.html', '.txt', '']);

const c = {
	bold: (s) => `\x1b[1m${s}\x1b[22m`,
	dim: (s) => `\x1b[2m${s}\x1b[22m`,
	red: (s) => `\x1b[31m${s}\x1b[39m`,
	green: (s) => `\x1b[32m${s}\x1b[39m`,
};

function parseArgs(argv) {
	const opts = { dir: undefined, install: true, pm: undefined, yes: false, help: false };
	for (let i = 0; i < argv.length; i++) {
		const a = argv[i];
		if (a === '--no-install') opts.install = false;
		else if (a === '--yes' || a === '-y') opts.yes = true;
		else if (a === '--help' || a === '-h') opts.help = true;
		else if (a === '--pm') opts.pm = argv[++i];
		else if (a.startsWith('--pm=')) opts.pm = a.slice(5);
		else if (!a.startsWith('-') && !opts.dir) opts.dir = a;
		else throw new Error(`Unknown option: ${a}`);
	}
	return opts;
}

function detectPackageManager() {
	const agent = process.env.npm_config_user_agent ?? '';
	for (const pm of ['pnpm', 'yarn', 'bun']) if (agent.startsWith(pm)) return pm;
	return 'npm';
}

const toPackageName = (dir) =>
	path
		.basename(path.resolve(dir))
		.toLowerCase()
		.replace(/[^a-z0-9-~._]+/g, '-')
		.replace(/^[-._]+|-+$/g, '') || 'my-product';

const toTitle = (name) =>
	name
		.split(/[-_.]+/)
		.filter(Boolean)
		.map((w) => w[0].toUpperCase() + w.slice(1))
		.join(' ');

function copyTemplate(src, dest, vars) {
	fs.mkdirSync(dest, { recursive: true });
	for (const entry of fs.readdirSync(src, { withFileTypes: true })) {
		const from = path.join(src, entry.name);
		const to = path.join(dest, RENAMES[entry.name] ?? entry.name);
		if (entry.isDirectory()) {
			copyTemplate(from, to, vars);
		} else if (TEXT_EXT.has(path.extname(entry.name)) || entry.name in RENAMES) {
			let text = fs.readFileSync(from, 'utf8');
			for (const [key, value] of Object.entries(vars)) text = text.replaceAll(key, value);
			fs.writeFileSync(to, text);
		} else {
			fs.copyFileSync(from, to);
		}
	}
}

async function main() {
	const opts = parseArgs(process.argv.slice(2));
	if (opts.help) {
		console.log(`Usage: npm create @latitudelabs@latest [directory] [--no-install] [--pm <npm|pnpm|yarn|bun>] [--yes]`);
		return;
	}

	console.log(`\n${c.bold('Latitude')} ${c.dim(`create v${version}`)}\n`);

	let dir = opts.dir;
	if (!dir) {
		if (opts.yes || !process.stdin.isTTY) dir = 'my-product';
		else {
			const rl = createInterface({ input: process.stdin, output: process.stdout });
			dir = (await rl.question(`Where should we create your product? ${c.dim('(my-product)')} `)).trim() || 'my-product';
			rl.close();
		}
	}

	const target = path.resolve(dir);
	if (fs.existsSync(target) && fs.readdirSync(target).length > 0) {
		throw new Error(`${dir} already exists and is not empty.`);
	}

	const name = toPackageName(dir);
	copyTemplate(templateDir, target, {
		__NAME__: name,
		__TITLE__: toTitle(name),
		__DS_VERSION__: `^${version}`,
	});
	console.log(`${c.green('✔')} Created ${c.bold(name)} in ${path.relative(process.cwd(), target) || '.'}`);

	const pm = opts.pm ?? detectPackageManager();
	let installed = false;
	if (opts.install) {
		if (!process.env.GITHUB_TOKEN) {
			console.log(`${c.dim('–')} Skipping install: GITHUB_TOKEN is not set (needed for @latitudelabs packages).`);
		} else {
			console.log(`${c.dim('…')} Installing with ${pm}`);
			const res = spawnSync(pm, ['install'], { cwd: target, stdio: 'inherit', shell: process.platform === 'win32' });
			installed = res.status === 0;
			if (!installed) console.log(c.red(`Install failed. Run \`${pm} install\` inside ${dir} to retry.`));
		}
	}

	const run = pm === 'npm' ? 'npm run' : pm;
	console.log(`\nNext steps:\n`);
	console.log(`  cd ${path.relative(process.cwd(), target) || '.'}`);
	if (!installed) {
		if (!process.env.GITHUB_TOKEN) console.log(`  export GITHUB_TOKEN=<token with read:packages>`);
		console.log(`  ${pm} install`);
	}
	console.log(`  ${run} dev\n`);
	console.log(c.dim(`Guidelines and components: see the design system Storybook. AI agents: see AGENTS.md.\n`));
}

main().catch((err) => {
	console.error(c.red(`\n✖ ${err.message}\n`));
	process.exit(1);
});
