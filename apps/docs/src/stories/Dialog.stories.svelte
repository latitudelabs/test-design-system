<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import { Button, Dialog, Input, Label, buttonVariants } from '@latitudelabs/design-system';
	import { Trash } from '@latitudelabs/design-system/icons';

	const { Story } = defineMeta({
		title: 'Components/Dialog',
		tags: ['autodocs'],
		parameters: {
			docs: {
				description: {
					component: `A modal window for a **short, focused decision** that must happen before continuing: confirming a
destructive action, or a small form (rename, invite). It traps focus, closes on Escape, and returns focus to the
trigger.

Compose: \`Dialog.Root\` › \`Dialog.Trigger\` + \`Dialog.Content\` › \`Dialog.Header\` (\`Title\`, \`Description\`) and
\`Dialog.Footer\` with the actions (primary last). Always give it a \`Title\`; screen readers announce it.

**Don't** use dialogs for long content, multi-step flows or anything users need to compare with the page
behind it. Use a page or a panel instead.`,
				},
			},
		},
	});
</script>

<Story name="Confirm delete">
	<Dialog.Root>
		<Dialog.Trigger class={buttonVariants({ variant: 'destructive' })}>
			<Trash data-icon="inline-start" />Delete project
		</Dialog.Trigger>
		<Dialog.Content>
			<Dialog.Header>
				<Dialog.Title>Delete “Spider-Man trailer test”?</Dialog.Title>
				<Dialog.Description>
					This permanently deletes the project, its questions and all 24 responses. This can’t be undone.
				</Dialog.Description>
			</Dialog.Header>
			<Dialog.Footer>
				<Dialog.Close class={buttonVariants({ variant: 'secondary' })}>Cancel</Dialog.Close>
				<Button variant="destructive">Delete project</Button>
			</Dialog.Footer>
		</Dialog.Content>
	</Dialog.Root>
</Story>

<Story name="Small form">
	<Dialog.Root>
		<Dialog.Trigger class={buttonVariants({ variant: 'secondary' })}>Rename</Dialog.Trigger>
		<Dialog.Content>
			<Dialog.Header>
				<Dialog.Title>Rename project</Dialog.Title>
				<Dialog.Description>Viewers will see the new name on the invite page.</Dialog.Description>
			</Dialog.Header>
			<div class="flex flex-col gap-2">
				<Label for="project-name">Project name</Label>
				<Input id="project-name" value="Spider-Man trailer test" />
			</div>
			<Dialog.Footer>
				<Dialog.Close class={buttonVariants({ variant: 'secondary' })}>Cancel</Dialog.Close>
				<Button>Save</Button>
			</Dialog.Footer>
		</Dialog.Content>
	</Dialog.Root>
</Story>
