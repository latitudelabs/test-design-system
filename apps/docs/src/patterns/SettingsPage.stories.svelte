<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import SettingsPage from './examples/SettingsPage.svelte';

	const { Story } = defineMeta({
		title: 'Patterns/Settings page',
		parameters: {
			layout: 'fullscreen',
			docs: {
				description: {
					component: `A settings page for one object (here, a project). Try it: clear the name and save, toggle a
notification, delete the project.

**Anatomy:** app header with a breadcrumb ending in **Settings** · \`text-heading\` page title · one card per group.

**Rules**
- **Group by what changes together**, one \`Card\` per group with a title and a one-line description.
- **Form fields save explicitly** (a \`Save changes\` button, confirmation via \`role="status"\`); **switches apply
  immediately** and live in their own card so the difference is obvious.
- Each switch row: \`Label\` + muted explanation on the left, \`Switch\` on the right.
- **Danger zone last.** Destructive actions sit in their own card at the bottom and confirm in a \`Dialog\` that names
  the object and says what's lost. Focus starts on Cancel.
- Validate on save; show the error under the field (\`aria-invalid\` + \`aria-describedby\`) and clear it as the user
  types.`,
				},
			},
		},
	});
</script>

<Story name="Settings page">
	<SettingsPage />
</Story>
