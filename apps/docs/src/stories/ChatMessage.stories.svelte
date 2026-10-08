<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import { ChatMessage } from '@latitudelabs/design-system';

	const { Story } = defineMeta({
		title: 'Components/ChatMessage',
		component: ChatMessage,
		tags: ['autodocs'],
		parameters: {
			docs: {
				description: {
					component: `A message in a conversation. Assistant messages carry the AI avatar, the only place the brand
gradient appears in product UI.`,
				},
			},
		},
	});
</script>

<Story name="Assistant">
	<div class="w-[430px]">
		<ChatMessage>
			Viewer experience is ready - it consists of a trailer and a few questions to understand how people like characters.
			Next step is to share it with viewers, or I could recruit them myself, if you would like that
		</ChatMessage>
	</div>
</Story>

<Story name="User">
	<div class="w-[430px]"><ChatMessage from="user">Yeah, let’s try that</ChatMessage></div>
</Story>
