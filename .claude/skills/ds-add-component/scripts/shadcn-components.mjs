#!/usr/bin/env node
// Lists shadcn-svelte's UI components and marks which ones the design system already has.
//
//   node .claude/skills/ds-add-component/scripts/shadcn-components.mjs [search]
//
// Use it before building anything new: if shadcn-svelte has a match, start from it (Bits UI accessibility for free).

import fs from 'node:fs';
import path from 'node:path';

const REGISTRY = 'https://shadcn-svelte.com/registry/index.json';
const search = process.argv[2]?.toLowerCase();
const uiDir = path.resolve('packages/design-system/src/lib/components/ui');
const ours = new Set(fs.existsSync(uiDir) ? fs.readdirSync(uiDir) : []);

const res = await fetch(REGISTRY);
if (!res.ok) {
	console.error(`Couldn't fetch ${REGISTRY} (${res.status}). Check https://shadcn-svelte.com/docs/components instead.`);
	process.exit(1);
}
const items = (await res.json()).filter((i) => i.type === 'registry:ui');
const rows = items
	.filter((i) => !search || i.name.includes(search))
	.map((i) => ({ name: i.name, inDs: ours.has(i.name), deps: i.registryDependencies?.filter((d) => d !== 'utils') ?? [] }));

if (search && rows.length === 0) {
	console.log(`No shadcn-svelte component matches "${search}". Check Bits UI primitives (https://bits-ui.com/docs) before writing one from scratch.`);
	process.exit(0);
}
console.log(`shadcn-svelte: ${items.length} UI components${search ? `, ${rows.length} matching "${search}"` : ''}\n`);
for (const r of rows) {
	console.log(`${r.inDs ? '✔ in DS ' : '  new    '} ${r.name}${r.deps.length ? `  (also adds: ${r.deps.join(', ')})` : ''}`);
}
