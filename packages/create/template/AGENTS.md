# Notes for AI coding agents

This app uses the Latitude design system (`@latitudelabs/design-system`, Svelte 5 + Tailwind v4).

- Build UI from design-system components first: Button, Badge, Input, Textarea, Label, Separator, PromptInput,
  Steps, ChatMessage, and the compound Card, Avatar and Breadcrumb (`<Card.Root>`, `<Card.Title>`, …).
- Style only with semantic token utilities: `bg-background`, `bg-card`, `text-foreground`, `text-muted-foreground`,
  `border-border`, `bg-primary text-primary-foreground`, `text-destructive`. Never hardcode colors.
- Typography utilities: `text-heading`, `text-title`, `text-body-lg`, `text-body`, `text-caption`, `text-body-sm`.
  Weights are 400/500 only (`font-medium`), never bold.
- Radius: `rounded-sm` (8) · `rounded-md` (12) · `rounded-lg` (16) · `rounded-xl` (24, cards) · `rounded-full`.
  Elevation: `shadow-hairline` (cards, no borders) and `shadow-raised` (floating panels).
- The brand gradient (`bg-brand`) is reserved for the AI avatar and brand moments.
- Dark mode is automatic through the roles; don't add `dark:` color overrides.
