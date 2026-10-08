---
name: ds-figma-sync
description: Keep the Latitude design system's code (tokens.css, theme.css) and its Figma library in sync — compare variables in both themes, report every difference, and apply the chosen side. Use this whenever someone says Figma and code differ, "sync tokens", "I changed variables in Figma", "push tokens to Figma", "is Figma up to date", after editing tokens.css/theme.css, or before a design-system release — even if they only mention one side.
---

# Syncing tokens between code and Figma

Code is the source of truth (`packages/design-system/src/lib/styles/`). The Figma library mirrors it so designers
use exactly what ships. Drift happens in both directions: someone tweaks a variable in Figma, or a token changes in
code. This skill finds every difference and resolves it deliberately. Never silently overwrite either side.

## Where things are

| | Code | Figma (file `m2eh3Isz82XMQFQ38dLptm`, "design-system-test") |
|---|---|---|
| Raw palette | `tokens.css` `:root` (`--neutral-50`, `--red-700`, `--brand-1`…) | collection **Primitives**, mode `Value`, vars `color/neutral/50`… |
| Color roles, light | `theme.css` `:root` (`--background: var(--neutral-50)`) | collection **Theme**, mode `Light`, vars `color/background`… (aliases to Primitives) |
| Color roles, dark | `theme.css` `.dark` | collection **Theme**, mode `Dark` |
| Translucent effect colors | `--elevation-*`, ring opacity utilities | **Theme** `effect/*`, `color/destructive-subtle` (Figma-only expressions of code's `/10`, `/50` opacities) |
| Radius, spacing | `theme.css` `@theme` (`--radius-*`) + Tailwind scale | collection **Dimensions** (`radius/*`, `spacing/*`) |
| Type | `theme.css` `@theme` `--text-*` | text styles Heading, Title, Body large, Body, Body medium, Caption, Body small |
| Shadows | `@theme` `--shadow-*` | effect styles Shadow/Hairline, Shadow/Raised (colors bound to `effect/*`) |

Every Figma variable's WEB code syntax is its CSS name (`var(--muted-foreground)`), which is how names map.

## Workflow

### 1. Resolve code tokens

```bash
node .claude/skills/ds-figma-sync/scripts/code-tokens.mjs . > /tmp/code.json
```

### 2. Read Figma

Load the `figma-use` skill, then run this read-only script with `use_figma` and save its return value as
`/tmp/figma.json`:

```js
const vars = await figma.variables.getLocalVariablesAsync();
const cols = await figma.variables.getLocalVariableCollectionsAsync();
const byId = Object.fromEntries(vars.map((v) => [v.id, v]));
const hex = (c) => '#' + [c.r, c.g, c.b].map((x) => Math.round(x * 255).toString(16).padStart(2, '0')).join('');
const resolve = (val) => { while (val?.type === 'VARIABLE_ALIAS') val = Object.values(byId[val.id].valuesByMode)[0]; return hex(val); };
const prim = cols.find((c) => c.name === 'Primitives'), theme = cols.find((c) => c.name === 'Theme');
const [light, dark] = [theme.modes.find((m) => m.name === 'Light'), theme.modes.find((m) => m.name === 'Dark')];
const out = { primitives: {}, light: {}, dark: {} };
for (const v of vars.filter((v) => v.variableCollectionId === prim.id))
  out.primitives[v.codeSyntax.WEB.slice(6, -1)] = hex(Object.values(v.valuesByMode)[0]);
for (const v of vars.filter((v) => v.variableCollectionId === theme.id && v.name.startsWith('color/') && v.name !== 'color/destructive-subtle')) {
  out.light[v.name.slice(6)] = resolve(v.valuesByMode[light.modeId]);
  out.dark[v.name.slice(6)] = resolve(v.valuesByMode[dark.modeId]);
}
return out;
```

### 3. Compare

```bash
node .claude/skills/ds-figma-sync/scripts/diff.mjs /tmp/code.json /tmp/figma.json
```

It prints a table of differences (or "In sync: N values match"). Also eyeball text styles and Dimensions if the
user mentions type, radius or spacing changes; the script covers colors.

### 4. Decide, then apply

Show the table and ask which side wins **per difference** unless the user already said (e.g. "I updated Figma, pull
it into code"). Then:

- **Figma → code:** edit `tokens.css` / `theme.css`. New primitive? Add it to `tokens.css` and keep the scale order
  (higher number = darker). Then run `pnpm --filter @latitudelabs/design-system check`, rebuild Storybook, and check
  contrast for any role you changed (text roles need 4.5:1 on their backgrounds; Foundations/Colors lists the pairs).
- **Code → Figma:** with `use_figma` (load `figma-use` + `figma-generate-library` first), set values on the
  existing variables. Look variables up by name, never by remembered IDs. New primitives get `scopes = []` and WEB
  code syntax `var(--name)`; new roles alias a primitive in both modes and get a scope that fits their use.
- Re-run steps 1–3 until it reports in sync.

### 5. Report

List what changed on each side, the final "In sync: N values" line, and any contrast concerns. Remind the user to
**publish the Figma library** after Figma-side changes, and to add a changeset (`pnpm changeset`) after code-side
changes.

## Figma gotchas (learned the hard way)

- `setBoundVariableForPaint` resets paint opacity, and switching a frame's variable mode drops opacity on bound
  fills. Put translucency in the variable's color alpha instead (that's why `destructive-subtle` exists).
- `node.resize()` resets auto-layout sizing to FIXED. Set `primaryAxisSizingMode`/`counterAxisSizingMode` after it.
- Effect colors can be bound with `figma.variables.setBoundVariableForEffect(effect, 'color', variable)`.
- Renaming a variable keeps every binding. Prefer renaming over delete + recreate.
