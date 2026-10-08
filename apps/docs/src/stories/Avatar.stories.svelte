<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import { Avatar } from '@latitudelabs/design-system';

	const { Story } = defineMeta({
		title: 'Components/Avatar',
		tags: ['autodocs'],
		parameters: {
			docs: {
				description: {
					component: `Represents a person or the AI assistant. People get an image with initials as the fallback.
The **AI assistant** always uses the brand gradient, the one place it appears in the product UI.`,
				},
			},
		},
	});
</script>

<Story name="Person">
	<Avatar.Root>
		<Avatar.Image src="https://i.pravatar.cc/80?img=12" alt="Peter Parker" />
		<Avatar.Fallback>PP</Avatar.Fallback>
	</Avatar.Root>
</Story>

<Story name="Fallback">
	<Avatar.Root>
		<Avatar.Fallback>PP</Avatar.Fallback>
	</Avatar.Root>
</Story>

<Story name="AI assistant">
	<Avatar.Root class="size-10" aria-label="AI assistant">
		<Avatar.Fallback class="bg-brand blur-[1.5px]"><span class="sr-only">AI</span></Avatar.Fallback>
	</Avatar.Root>
</Story>
