<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import ProjectForm from './examples/ProjectForm.svelte';

	const { Story } = defineMeta({
		title: 'Patterns/Forms & validation',
		parameters: {
			docs: {
				description: {
					component: `How every form is built. Try it: press **Create project** with the form empty.

**Layout**
- Label above the field (8px, \`gap-2\`); 16px between fields (\`gap-4\`); a form lives on a \`Card\` or in a \`Dialog\`.
- Mark the **optional** fields, not the required ones (most fields should be required, or removed).
- Helper text in \`text-caption text-muted-foreground\` under the field, linked with \`aria-describedby\`.
- Actions bottom-right: \`secondary\` Cancel, then **one** primary submit named for what it does ("Create project",
  not "Submit").

**Validation**
- Validate **on submit** (and clear an error as soon as the user fixes it). Don't validate while the user is still
  typing the first time.
- Each error: \`aria-invalid="true"\` on the field, the message in \`text-caption text-destructive\` replacing the
  helper text, linked with \`aria-describedby\`. Say how to fix it, not just what's wrong.
- With more than one error, add a summary (\`role="alert"\`) at the top and **move focus to the first invalid field**.`,
				},
			},
		},
	});
</script>

<Story name="New project form">
	<ProjectForm />
</Story>
