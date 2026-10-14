<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import { fn } from 'storybook/test';
	import { ChatMessage, ChoiceList, Kbd, PromptInput } from '@latitudelabs/design-system';

	const { Story } = defineMeta({
		title: 'Components/ChoiceList',
		component: ChoiceList,
		tags: ['autodocs'],
		args: {
			options: ['Women Talking trailer', 'Inside Out 2 clip', 'Compare both'],
			onselect: fn(),
			numbered: true
		},
		parameters: {
			docs: {
				description: {
					component: `Answers the assistant offers with a question, so the user can reply in one click. Keep options
short (1–5 words), phrased as the user's answer, 2–4 of them, and keep the question itself in the message.

Put a \`PromptInput\` with the next number as \`leading\` right below it for "something else", with
\`submitOnFocus\`. Placed flush with a \`ChatMessage\`, the numbers centre under the avatar and the labels line up
with the message text. Number-key shortcuts are up to the app.`,
				},
			},
		},
	});
</script>

{#snippet template(args)}
	<div class="w-[430px]"><ChoiceList {...args} /></div>
{/snippet}

<Story name="Default" {template} />
<Story name="Without numbers" args={{ numbered: false }} {template} />

<Story name="In a conversation">
	{#snippet template(args)}
		<div class="flex w-[430px] flex-col gap-5 rounded-xl bg-card p-2 shadow-raised">
			<ChatMessage>
				You have two analysed videos. Which one do you want to dig into, or should I compare them?
			</ChatMessage>
			<div class="flex flex-col gap-1">
				<ChoiceList {...args} />
				<PromptInput placeholder="Something else…" submitOnFocus>
					{#snippet leading()}<Kbd>{args.options.length + 1}</Kbd>{/snippet}
				</PromptInput>
			</div>
		</div>
	{/snippet}
</Story>
