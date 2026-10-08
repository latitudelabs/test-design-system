<script lang="ts" module>
	export type Step = { title: string; description?: string };
</script>

<script lang="ts">
	import type { HTMLOlAttributes } from 'svelte/elements';
	import { cn, type WithElementRef } from '$lib/utils.js';

	type Props = WithElementRef<HTMLOlAttributes, HTMLOListElement> & {
		steps: Step[];
		/** Index of the current step. */
		current?: number;
		/** When set, steps become buttons and this is called with the clicked index. */
		onselect?: (index: number) => void;
	};

	let {
		ref = $bindable(null),
		steps,
		current = $bindable(0),
		onselect,
		class: className,
		...restProps
	}: Props = $props();

	const itemClass = 'flex w-full items-start gap-2 rounded-sm px-4 py-3 text-left';
</script>

<ol bind:this={ref} data-slot="steps" class={cn('flex flex-col', className)} {...restProps}>
	{#each steps as step, i (i)}
		{@const active = i === current}
		<li>
			{#if onselect}
				<button
					type="button"
					aria-current={active ? 'step' : undefined}
					onclick={() => ((current = i), onselect(i))}
					class={cn(
						itemClass,
						'cursor-pointer outline-none hover:bg-accent focus-visible:ring-3 focus-visible:ring-ring/50'
					)}
				>
					{@render content(step, i, active)}
				</button>
			{:else}
				<div aria-current={active ? 'step' : undefined} class={itemClass}>
					{@render content(step, i, active)}
				</div>
			{/if}
		</li>
	{/each}
</ol>

{#snippet content(step: Step, i: number, active: boolean)}
	<span
		class={cn(
			'flex size-6 shrink-0 items-center justify-center rounded-full text-body font-medium',
			active ? 'bg-primary text-primary-foreground' : 'text-muted-foreground'
		)}
	>
		{i + 1}.
	</span>
	<span class="flex min-w-0 flex-col pt-0.5">
		<span class="text-body font-medium">{step.title}</span>
		{#if step.description}
			<span class="text-caption text-muted-foreground">{step.description}</span>
		{/if}
	</span>
{/snippet}
