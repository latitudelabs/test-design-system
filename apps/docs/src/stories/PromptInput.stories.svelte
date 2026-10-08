<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import { fn } from 'storybook/test';
	import { PromptInput } from '@latitudelabs/design-system';

	const { Story } = defineMeta({
		title: 'Components/PromptInput',
		component: PromptInput,
		tags: ['autodocs'],
		args: { placeholder: 'My name is...', onsubmit: fn(), disabled: false },
		parameters: {
			docs: {
				description: {
					component: `A single-line field with a send button, for answering a question or talking to the AI assistant.
Submits on Enter or the button; the button stays disabled until there's text.

Use \`Input\` + \`Label\` for regular forms. PromptInput is for conversational, one-answer-at-a-time flows.`,
				},
			},
		},
	});
</script>

{#snippet template(args)}
	<div class="w-[430px]"><PromptInput {...args} /></div>
{/snippet}

<Story name="Default" {template} />
<Story name="With value" args={{ value: 'Yeah, let’s try that' }} {template} />
<Story name="Disabled" args={{ disabled: true }} {template} />
