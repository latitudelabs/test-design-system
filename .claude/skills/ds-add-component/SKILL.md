---
name: ds-add-component
description: Add a new component (or a new icon) to the Latitude design system end to end — shadcn-svelte or custom Svelte component restyled to the tokens, exported from the package, documented in Storybook with usage guidance, mirrored as a Figma component with variable bindings, and mapped with Code Connect. Use this whenever someone wants a new design-system component ("add a Select", "we need tabs", "add a Dialog to the DS"), wants to promote a product's local component into the design system, or asks to add an icon to the curated set.
---

# Adding a component to the Latitude design system

A component isn't done when it renders. It's done when product teams can find it in Storybook, designers can use
it in Figma, both match, and AI agents know it exists. Follow all the steps; skipping one is how code and Figma
drift apart.

Repo layout: `packages/design-system` (the package), `apps/docs` (Storybook), `packages/create` (starter CLI).

## 0. Decide what to build

- **Check it doesn't exist** (`packages/design-system/src/lib/index.ts`) and isn't better as a variant of an existing
  component.
- **Prefer shadcn-svelte** if it has the component (https://shadcn-svelte.com/docs/components): it brings Bits UI
  accessibility for free. Write a custom component only for Latitude-specific patterns (like PromptInput, Steps,
  ChatMessage).
- Agree the **API** (props, variants) with the user before building if it isn't obvious.

## 1. Code

**shadcn component:**

```bash
cd packages/design-system && npx shadcn-svelte@latest add <name> --yes --no-deps-install && cd ../.. && pnpm install
```

Then move any new runtime deps the CLI added from `devDependencies` to `dependencies` in
`packages/design-system/package.json` (published consumers need them).

**Custom component:** `src/lib/components/<name>/<name>.svelte` + `index.ts`. Follow the existing ones: Svelte 5
runes, `$props()` with a typed `Props`, `WithElementRef`, `class` merged with `cn()`, `data-slot="<name>"`,
`...restProps` spread.

**Restyle to the tokens.** Shadcn defaults don't match Latitude. Go through every class:

- Colors → roles only (`bg-card`, `text-muted-foreground`, `bg-input`, `text-placeholder`, `ring-ring/50`…).
- Type → `text-heading/title/body-lg/body/caption/body-sm`; weights 400/500 only (replace `text-sm`, `font-semibold`).
- Radius → `rounded-sm` 8 · `md` 12 · `lg` 16 · `xl` 24 · `full` by element size (inputs `lg`, buttons `md`,
  surfaces `xl`).
- Surfaces → `shadow-hairline` (resting) / `shadow-raised` (floating), not borders or `shadow-md`.
- Check it in **dark mode** too (Storybook toolbar). No `dark:` color overrides; roles handle it.

If you introduce a new custom utility (a new `text-*` style, `shadow-*`, `bg-*` image), register it in the
`createCn` config in `src/lib/utils.ts`, or `cn()` will silently drop conflicting classes.

**Export** it from `src/lib/index.ts`: simple components by name, compound ones as a namespace
(`export * as Tabs from …`).

```bash
pnpm --filter @latitudelabs/design-system check && pnpm --filter @latitudelabs/design-system build
```

## 2. Storybook

Create `apps/docs/src/stories/<Name>.stories.svelte` (Svelte CSF, see `Button.stories.svelte`):

- `parameters.docs.description.component`: **when to use, when not to, and the alternative**. This text is the
  guideline teams read; make it specific.
- Stories for each variant/state, including disabled/invalid/empty.
- `defineMeta({ component })` must be a directly imported component. For compound components (`Tabs.Root`), omit
  `component`.
- Don't put a literal `</script>` inside a description string; escape it as `<\/script>`.
- **Restart Storybook** after adding new files: Tailwind's dev watcher doesn't scan files created after startup.

Verify: the a11y panel shows no violations in both themes. For a full sweep, run axe over all stories (see how
earlier runs did it: load each `iframe.html?id=…`, inject axe-core from cdnjs, `axe.run('#storybook-root')`).

## 3. Agent skill

Add the component to `packages/design-system/skills/latitude-ui/SKILL.md` (catalog table) and
`references/components.md` (API + example), and a pattern to `references/patterns.md` if it enables a new layout.
Product apps receive this on their next install, so agents start using it.

## 4. Figma

Load `figma-use` and `figma-generate-library`, then in file `m2eh3Isz82XMQFQ38dLptm`:

1. Create a page named after the component (after the existing component pages, before "——— Product ———").
2. Build the base component with auto-layout and **every** fill, stroke, padding, gap and radius bound to the
   **Theme**/**Dimensions** variables (look them up by name), text using the text styles, surfaces using the
   Shadow effect styles.
3. Variants with `combineAsVariants` (axes mirror the code props, ≤30 combinations), then lay them out in a grid.
4. Properties: TEXT for labels, BOOLEAN for optional parts, INSTANCE_SWAP for icons (preferred values = the Icon
   library components).
5. Description: `Code: <Component …> from @latitudelabs/design-system. <one-line guidance>`.
6. Validate: screenshot in Light, then inside a frame with the Theme collection set to Dark. Run an unbound-values
   audit (no SOLID fill/stroke without a bound variable, every TEXT has a text style).

Gotchas: `resize()` resets auto-layout sizing (set sizing modes after); set `autoRename = false` on text nodes before
naming them; binding a variable resets paint opacity (use a translucent variable instead); `findOne` can skip hidden
layers (keep direct references).

## 5. Code Connect

Write `packages/design-system/figma/<Name>.figma.ts` (copy an existing one: `// url=` header with the component set's
node id, `getEnum` mapping every variant value, `getString` for TEXT props, `getInstanceSwap(...).executeTemplate()`
for icons). Ask the user to **publish the Figma library**, then map it with the Figma MCP (`add_code_connect_map`,
label `Svelte`). Note: the MCP currently saves the link but not the template; full snippets need
`npx figma connect publish` with a Figma token from the user.

## 6. Ship

```bash
pnpm --filter @latitudelabs/design-system lint && pnpm --filter docs build && pnpm changeset
```

Changeset: `minor` for a new component. Then commit.

## Adding an icon

1. Pick the Lucide name (https://lucide.dev); confirm the file exists in
   `packages/design-system/node_modules/@lucide/svelte/dist/icons/<slug>.svelte` (Lucide 1.x renamed some, e.g.
   `trash-2` → `trash`).
2. Add it to `src/lib/icons/catalog.ts` (name, slug, category, search keywords) and `src/lib/icons/index.ts`
   (`export { default as Name } from '@lucide/svelte/icons/<slug>';`).
3. Add it to the icon list in `skills/latitude-ui/references/components.md`.
4. Figma: create `Icon/<Name>` on the **Icons** page in the right category section from the icon's SVG node data,
   stroke bound to `color/foreground`, description with the import line, and add it to the Button's Icon
   INSTANCE_SWAP preferred values.
5. Check the gallery at Storybook → Foundations → Icons, then add a `patch` changeset.
