#!/usr/bin/env node
// Copies the design system's agent skills into the app's .claude/skills/ so AI agents (Claude Code and others that
// read .claude/skills) build UI with the design system. Runs as the app's postinstall, so every install or
// design-system update refreshes them. Only the latitude-* skill folders are touched.

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const source = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../skills');
// npm/pnpm run postinstall from the app root; INIT_CWD is the directory the install was started in.
const appRoot = process.env.INIT_CWD ?? process.cwd();
const target = path.join(appRoot, '.claude', 'skills');

if (!fs.existsSync(source)) process.exit(0);
fs.mkdirSync(target, { recursive: true });
const synced = [];
for (const entry of fs.readdirSync(source, { withFileTypes: true })) {
	if (!entry.isDirectory() || !entry.name.startsWith('latitude-')) continue;
	const dest = path.join(target, entry.name);
	fs.rmSync(dest, { recursive: true, force: true });
	fs.cpSync(path.join(source, entry.name), dest, { recursive: true });
	synced.push(entry.name);
}
console.log(
	`latitude-skills: synced ${synced.join(', ')} → ${path.relative(appRoot, target) || target}`
);
