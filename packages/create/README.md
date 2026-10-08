# @latitudelabs/create

Scaffolds a SvelteKit product wired to `@latitudelabs/design-system`: Tailwind v4 theme, Inter, light/dark mode,
GitHub Packages access and a starter page.

```bash
export GITHUB_TOKEN=<token with read:packages>
npm create @latitudelabs@latest my-product
```

Options: `--no-install`, `--pm <npm|pnpm|yarn|bun>`, `--yes` (accept defaults).

The template lives in `template/`. `_gitignore` and `_npmrc` are renamed on copy (npm strips dotfiles from
published packages), and `__NAME__`, `__TITLE__`, `__DS_VERSION__` are replaced. The design system version always
matches this package's version (they're released together).
