# @latitudelabs/design-system

What changed, newest first. Nothing has been released as a version yet, so everything below is unreleased and
grouped by day. With each change, add a line under today's date here and a changeset (`pnpm changeset`); when a
version is released, changesets adds it as a heading above this list.

## Unreleased

### 2026-10-15

- Storybook: Getting started and the Changelog are Markdown pages with Mermaid diagrams drawn live (the design
  system map is no longer an exported image), using the same doc renderer as the Iris Storybook.
- **Card.Section**: a collapsible, titled group inside a card. Its items sit in one row that scrolls sideways, with
  back and forward buttons once they overflow; `count` and `collapsed` props.
- **Stat**: a key number on a muted tile, with a caption.
- **SentimentBar**: positive, neutral and negative segments sized by count, with an optional legend (labelled for
  screen readers without one).
- **Tile**: a small muted surface for one item in a row or grid; a link with `href`, a button with `onclick`.
- Figma: pages for Stat, SentimentBar and Tile, and Card.Section on the Card page, with Code Connect templates.

### 2026-10-14

- **Classic theme**: a dark theme with a violet primary, pure-white text, fainter hairlines and tighter radii
  (4/6/12/16). Apply `data-theme="classic"` (or the `classic` class) together with `dark`. The `rounded-*` utilities
  now follow the theme.
- **NavItem**: a header navigation link that marks the current page with a full-colour label and a soft brand glow.
- **`--orange-400`** primitive for small product labels such as "(alpha)" next to a logo.
- **PromptInput** is multi-line: grows up to `maxLines` (default 4), Enter sends, Shift+Enter adds a line, and
  `disabled` keeps focus. New `focusedPlaceholder`, `leading` and `submitOnFocus`. **Breaking:** `ref` is now an
  `HTMLTextAreaElement`.
- **ChoiceList** (answers the assistant offers), **Kbd**, **Orb** (the animated AI avatar), **Table**, **Progress**
  and **SegmentedControl**.
- **ChatMessage** takes an `avatar` snippet.
- **`success`** colour role and a `success` Badge variant.
- The review audit warns about hand-built tables, progress bars and radio groups.

### 2026-10-13

- The starter's `ds:update` installs with the app's own package manager.

### 2026-10-09

- **Slider**: a single value or a range, `default`/`sm` sizes, horizontal or vertical, with a tall thumb from Figma.

### 2026-10-08

- **Switch** and **Dialog**.
- The curated icon set (`@latitudelabs/design-system/icons`, 62 Lucide icons) and `<Icon>`.
- Agent skills `latitude-ui` and `latitude-ui-review`, synced into apps on install.
- **Dark theme**, plus a `control` colour role; dark `popover` matches `card`; dark destructive red lightened to stay
  AA on every surface.
- `@latitudelabs/create`, the starter CLI (with a `--local` mode).
- Storybook: Getting started, AI agent skills, patterns (page layouts, settings, forms, states, AI chat) and a design
  system map.
- Code Connect templates for the synced Figma library.

### 2026-10-06

- First components and tokens from Figma: **Button**, **Input** (with an error state) and the primary colours.
- Svelte 5, Vite 8 and Storybook 10.
