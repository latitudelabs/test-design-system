#!/usr/bin/env node
// Resolves the design system's color tokens from code into plain hex values.
//
//   node code-tokens.mjs [repoRoot=.] > code.json
//
// Output: { primitives: {"neutral-50": "#f2f2f2", …}, light: {"background": "#f2f2f2", …}, dark: {…} }

import fs from 'node:fs';
import path from 'node:path';

const root = path.resolve(process.argv[2] ?? '.');
const styles = path.join(root, 'packages/design-system/src/lib/styles');
const tokens = fs.readFileSync(path.join(styles, 'tokens.css'), 'utf8');
const theme = fs.readFileSync(path.join(styles, 'theme.css'), 'utf8');

const block = (css, re) =>
	Object.fromEntries([...(css.match(re)?.[1] ?? '').matchAll(/--([\w-]+):\s*([^;]+);/g)].map((m) => [m[1], m[2].trim()]));

const primitives = block(tokens, /:root\s*\{([\s\S]*?)\n\}/);
const lightRoles = block(theme, /:root\s*\{([\s\S]*?)\n\}/);
const darkRoles = block(theme, /\.dark\s*\{([\s\S]*?)\n\}/);

const resolve = (value) => {
	const ref = value.match(/^var\(--([\w-]+)\)$/)?.[1];
	return ref && primitives[ref] ? primitives[ref].split(/\s/)[0] : value;
};
// Only color roles are synced as Figma color variables (radius etc. live in @theme / Dimensions).
const isColor = (v) => /^#|^var\(--(neutral|red|brand)/.test(v);
const roles = (map) => Object.fromEntries(Object.entries(map).filter(([k, v]) => isColor(v) && !k.startsWith('sidebar')).map(([k, v]) => [k, resolve(v)]));

const light = roles(lightRoles);
const dark = { ...light, ...roles(darkRoles) };
const cleanPrimitives = Object.fromEntries(Object.entries(primitives).map(([k, v]) => [k, v.split(/\s/)[0]]));
console.log(JSON.stringify({ primitives: cleanPrimitives, light, dark }, null, 2));
