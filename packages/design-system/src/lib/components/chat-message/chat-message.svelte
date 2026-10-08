<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { HTMLAttributes } from 'svelte/elements';
	import { cn, type WithElementRef } from '$lib/utils.js';

	type Props = WithElementRef<HTMLAttributes<HTMLDivElement>> & {
		/** `assistant` messages show the AI avatar (brand gradient); `user` messages are plain. */
		from?: 'assistant' | 'user';
		children?: Snippet;
	};

	let {
		ref = $bindable(null),
		from = 'assistant',
		class: className,
		children,
		...restProps
	}: Props = $props();
</script>

<div
	bind:this={ref}
	data-slot="chat-message"
	data-from={from}
	class={cn('flex items-start gap-4', className)}
	{...restProps}
>
	{#if from === 'assistant'}
		<div class="relative size-10 shrink-0" role="img" aria-label="AI assistant">
			<div class="absolute inset-0 rounded-full bg-brand blur-[3px]"></div>
		</div>
	{/if}
	<div class="min-w-0 flex-1 text-body-lg">
		{@render children?.()}
	</div>
</div>
