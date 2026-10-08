<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import ChatPanel from './examples/ChatPanel.svelte';

	const conversation = [
		{
			from: 'assistant' as const,
			text: 'Viewer experience is ready. It has a trailer and a few questions about the characters. Should I recruit viewers for you?',
		},
	];

	const { Story } = defineMeta({
		title: 'Patterns/AI chat panel',
		parameters: {
			docs: {
				description: {
					component: `How the AI assistant talks to people. Try it: send a reply and watch the thinking state.

**Anatomy:** a floating panel (\`rounded-xl bg-card p-2 shadow-raised\`, 446px) with the conversation, then a
\`PromptInput\`.

**Rules**
- The assistant's messages carry the AI avatar, **the only place the brand gradient appears**. User messages have
  no avatar.
- While the assistant works, show a **Thinking…** message and disable the input, so nobody sends twice.
- The message list is a \`role="log"\` with \`aria-live="polite"\`: screen readers announce new messages without
  stealing focus.
- Keep assistant messages short and end with a clear next step or question.`,
				},
			},
		},
	});
</script>

<Story name="Conversation">
	<ChatPanel initial={conversation} />
</Story>

<Story name="Thinking">
	<ChatPanel initial={[...conversation, { from: 'user', text: 'Yeah, let’s try that' }]} thinkingInitially />
</Story>
