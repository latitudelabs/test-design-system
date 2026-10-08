# Latitude design system

Tokens, styles and Svelte components shared by Latitude's internal products, documented in Storybook.

| Path | What |
|---|---|
| `packages/design-system` | `@latitudelabs/design-system`: tokens, Tailwind v4 theme, shadcn-svelte based components |
| `apps/docs` | Storybook: getting started, foundations, components, patterns |
| `packages/create` | `@latitudelabs/create`: `npm create @latitudelabs@latest my-product` scaffolds a SvelteKit app with the design system |

## Develop

```bash
pnpm install
pnpm dev          # Storybook on http://localhost:6006
```

Storybook reads the design system's source directly, so component and token edits hot-reload.

Start a product against your local design system (no registry or token needed):

```bash
pnpm new ../my-product
```

Inside that app, `npm run ds:update` pulls in later design-system changes.

- Add a shadcn component: `cd packages/design-system && npx shadcn-svelte@latest add <name>`, then restyle it to the
  tokens and export it from `src/lib/index.ts`.
- Tokens: `packages/design-system/src/lib/styles/tokens.css` (primitives) and `theme.css` (roles, type, radius,
  shadows). Foundations docs are generated from these files.

## Release

```bash
pnpm changeset    # describe your change
```

Merging to `main` opens a "Version packages" PR; merging that publishes both packages (they share a version) to
GitHub Packages (`npm.pkg.github.com`).

Releases are **off** until the repository variable `RELEASE_ENABLED` is set to `true`
(Settings → Secrets and variables → Actions → Variables).
