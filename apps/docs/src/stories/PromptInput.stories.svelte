<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import { fn } from 'storybook/test';
	import { Kbd, PromptInput } from '@latitudelabs/design-system';

	const { Story } = defineMeta({
		title: 'Components/PromptInput',
		component: PromptInput,
		tags: ['autodocs'],
		args: { placeholder: 'My name is...', onsubmit: fn(), disabled: false },
		parameters: {
			docs: {
				description: {
					component: `A field with a send button, for answering a question or talking to the AI assistant. It grows with
its text up to \`maxLines\` (4 by default), then scrolls. Enter sends, Shift+Enter adds a line; the button stays
disabled until there's text.

\`disabled\` makes the field read-only (not disabled), so it keeps focus while an answer is on its way.
\`focusedPlaceholder\` swaps the placeholder while focused. \`leading\` puts something before the text (a \`Kbd\` hint
when it follows a \`ChoiceList\`), and \`submitOnFocus\` hides the send button until the field has focus.

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
<Story name="Multi-line" args={{ value: 'First line\nSecond line\nThird line' }} {template} />
<Story name="Leading key, send on focus" args={{ placeholder: 'Something else…', submitOnFocus: true }}>
	{#snippet template(args)}
		<div class="w-[430px]">
			<PromptInput {...args}>
				{#snippet leading()}<Kbd>4</Kbd>{/snippet}
			</PromptInput>
		</div>
	{/snippet}
</Story>
