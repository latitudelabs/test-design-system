#!/usr/bin/env node
// Compares code tokens with Figma variables.
//
//   node diff.mjs code.json figma.json
//
// Both files have the shape { primitives: {name: hex}, light: {role: hex}, dark: {role: hex} }
// (code.json from code-tokens.mjs; figma.json from the read script in SKILL.md). Exits 1 when they differ.

import fs from 'node:fs';

const [codePath, figmaPath] = process.argv.slice(2);
if (!codePath || !figmaPath) {
	console.error('Usage: node diff.mjs code.json figma.json');
	process.exit(2);
}
const code = JSON.parse(fs.readFileSync(codePath, 'utf8'));
const figma = JSON.parse(fs.readFileSync(figmaPath, 'utf8'));
const norm = (v) => (typeof v === 'string' ? v.toLowerCase() : v);

const rows = [];
let checked = 0;
for (const group of ['primitives', 'light', 'dark']) {
	const keys = new Set([...Object.keys(code[group] ?? {}), ...Object.keys(figma[group] ?? {})]);
	for (const key of [...keys].sort()) {
		checked++;
		const c = norm(code[group]?.[key]);
		const f = norm(figma[group]?.[key]);
		if (c === f) continue;
		rows.push({ group, token: key, code: c ?? '— (missing)', figma: f ?? '— (missing)' });
	}
}

if (rows.length === 0) {
	console.log(`✔ In sync: ${checked} values match (primitives + light + dark roles).`);
	process.exit(0);
}
console.log(`✖ ${rows.length} difference(s) out of ${checked} values:\n`);
console.log('| Group | Token | Code | Figma |\n|---|---|---|---|');
for (const r of rows) console.log(`| ${r.group} | \`${r.token}\` | ${r.code} | ${r.figma} |`);
process.exit(1);
