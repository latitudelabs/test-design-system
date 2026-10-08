// Scaffolds into a temp dir without installing and checks the output.
import assert from 'node:assert/strict';
import { spawnSync } from 'node:child_process';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const bin = fileURLToPath(new URL('../bin/index.js', import.meta.url));
const tmp = fs.mkdtempSync(path.join(os.tmpdir(), 'latitude-create-'));
const res = spawnSync(process.execPath, [bin, 'acme-insights', '--no-install'], { cwd: tmp, encoding: 'utf8' });
assert.equal(res.status, 0, res.stderr);

const app = path.join(tmp, 'acme-insights');
const pkg = JSON.parse(fs.readFileSync(path.join(app, 'package.json'), 'utf8'));
const { version } = JSON.parse(fs.readFileSync(new URL('../package.json', import.meta.url), 'utf8'));
assert.equal(pkg.name, 'acme-insights');
assert.equal(pkg.dependencies['@latitudelabs/design-system'], `^${version}`);
assert.ok(fs.existsSync(path.join(app, '.gitignore')), '.gitignore renamed');
assert.match(fs.readFileSync(path.join(app, '.npmrc'), 'utf8'), /@latitudelabs:registry=https:\/\/npm\.pkg\.github\.com/);
assert.match(fs.readFileSync(path.join(app, 'src/routes/+page.svelte'), 'utf8'), /Welcome to Acme Insights/);
const leftovers = spawnSync('grep', ['-rl', '__[A-Z_]*__', app], { encoding: 'utf8' }).stdout.trim();
assert.equal(leftovers, '', `unreplaced placeholders in: ${leftovers}`);

// Refuses to overwrite a non-empty directory.
const again = spawnSync(process.execPath, [bin, 'acme-insights', '--no-install'], { cwd: tmp, encoding: 'utf8' });
assert.notEqual(again.status, 0);

fs.rmSync(tmp, { recursive: true, force: true });
console.log('create: smoke test passed');
