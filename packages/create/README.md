# @latitudelabs/create

Scaffolds a SvelteKit product wired to `@latitudelabs/design-system`: Tailwind v4 theme, Inter, light/dark mode,
GitHub Packages access and a starter page.

```bash
export GITHUB_TOKEN=<token with read:packages>
npm create @latitudelabs@latest my-product
```

Options: `--local`, `--no-install`, `--pm <npm|pnpm|yarn|bun>`, `--yes` (accept defaults).

## Local mode (no registry)

From a checkout of this repo, `--local` builds the design system from source and vendors it into the new app:

```bash
pnpm new ../my-product          # = node packages/create/bin/index.js --local ../my-product
```

The app depends on `.latitude/latitudelabs-design-system-<version>.tgz` (commit that folder so others can install
too), its `.npmrc` has no GitHub Packages lines, and no `GITHUB_TOKEN` is needed. After changing the design system,
run `npm run ds:update` inside the app to repack and reinstall.

The template lives in `template/`. `_gitignore` and `_npmrc` are renamed on copy (npm strips dotfiles from
published packages), and `__NAME__`, `__TITLE__`, `__DS_VERSION__` are replaced. The design system version always
matches this package's version (they're released together).
