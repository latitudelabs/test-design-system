<script lang="ts">
	import { ChatMessage, PromptInput } from '@latitudelabs/design-system';

	type Message = { from: 'assistant' | 'user'; text: string };
	let { initial = [] as Message[], thinkingInitially = false } = $props();

	let messages = $state<Message[]>([...initial]);
	let thinking = $state(thinkingInitially);
	let draft = $state('');

	function send(text: string) {
		draft = '';
		messages.push({ from: 'user', text });
		thinking = true;
		setTimeout(() => {
			thinking = false;
			messages.push({ from: 'assistant', text: 'Done. I’ll invite 10 viewers and let you know when insights are ready.' });
		}, 1200);
	}
</script>

<div class="flex w-[446px] flex-col gap-5 rounded-xl bg-card p-2 shadow-raised">
	<!-- A live log, so screen readers hear new messages without moving focus. -->
	<div class="flex flex-col gap-5 px-2 pt-2" role="log" aria-live="polite" aria-label="Conversation with the assistant">
		{#each messages as message, i (i)}
			<ChatMessage from={message.from}>{message.text}</ChatMessage>
		{/each}
		{#if thinking}
			<ChatMessage>
				<span class="text-muted-foreground inline-flex items-center gap-1" aria-label="Assistant is thinking">
					Thinking<span class="animate-pulse">…</span>
				</span>
			</ChatMessage>
		{/if}
	</div>
	<PromptInput bind:value={draft} placeholder="Reply to the assistant…" disabled={thinking} onsubmit={send} />
</div>
