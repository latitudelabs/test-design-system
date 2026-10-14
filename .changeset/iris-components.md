---
'@latitudelabs/design-system': minor
---

Components and tokens from Iris:

- **PromptInput** is multi-line: a `<textarea>` that grows up to `maxLines` (default 4), Enter sends and
  Shift+Enter adds a line. `disabled` is now read-only so the field keeps focus. New `focusedPlaceholder`,
  `leading` (snippet before the text) and `submitOnFocus`. **Breaking:** `ref` is an `HTMLTextAreaElement`, and
  attributes pass through to the textarea (input-only ones like `type` no longer apply).
- **ChoiceList**: numbered answers the assistant offers, sized to sit above a `PromptInput`.
- **Kbd**: a small outlined key hint.
- **ChatMessage** `avatar` snippet, to replace the default AI avatar (e.g. with an `Orb`).
- **Orb**: the animated AI avatar (`breathe-swirl` CSS and `eye-spiral` WebGL variants; idle, thinking and
  speaking states; a pop on `pulse`).
- **Table** (compound, with `numeric` and `rowHeader` cells), **Progress** and **SegmentedControl**.
- `success` color role (`text-success`, `bg-success/10`) and a `success` Badge variant.
- The review audit warns about hand-built tables, progress bars and radio groups.
