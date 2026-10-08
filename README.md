# Latitude design system

Tokens, styles and Svelte components shared by Latitude's internal products, documented in Storybook.

| Path | What |
|---|---|
| `packages/design-system` | `@latitudelabs/design-system`: tokens, Tailwind v4 theme, shadcn-svelte based components |
| `apps/docs` | Storybook: getting started, foundations, components, patterns |
| `packages/create` | *(planned)* `@latitudelabs/create`, the `npm create @latitudelabs` starter CLI |

## Develop

```bash
pnpm install
pnpm dev          # Storybook on http://localhost:6006
```

Storybook reads the design system's source directly, so component and token edits hot-reload.

- Add a shadcn component: `cd packages/design-system && npx shadcn-svelte@latest add <name>`, then restyle it to the
  tokens and export it from `src/lib/index.ts`.
- Tokens: `packages/design-system/src/lib/styles/tokens.css` (primitives) and `theme.css` (roles, type, radius,
  shadows). Foundations docs are generated from these files.

## Release

```bash
pnpm changeset    # describe your change
```

Merging to `main` opens a "Version packages" PR; merging that publishes to GitHub Packages (`npm.pkg.github.com`).
