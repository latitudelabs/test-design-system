<script module lang="ts">
	/** Counts of positive, neutral and negative responses. */
	export type Sentiment = { positive: number; neutral: number; negative: number };
</script>

<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';
	import { cn, type WithElementRef } from '$lib/utils.js';

	type Props = WithElementRef<HTMLAttributes<HTMLDivElement>> &
		Sentiment & {
			/** Show the counts below the bar ("23 positive · 10 neutral · 7 negative"). */
			legend?: boolean;
			/** Text before the counts in the legend, e.g. "Comment sentiment:". */
			label?: string;
		};

	let {
		ref = $bindable(null),
		class: className,
		positive,
		neutral,
		negative,
		legend = true,
		label,
		...restProps
	}: Props = $props();

	const counts = $derived(`${positive} positive · ${neutral} neutral · ${negative} negative`);
</script>

<!-- How responses split by sentiment: success, neutral (control) and destructive segments sized by count. -->
<div
	bind:this={ref}
	data-slot="sentiment-bar"
	class={cn('flex flex-col gap-1', className)}
	{...restProps}
>
	<!-- With a legend the bar only repeats it, so it's hidden from screen readers; without one it's labelled. -->
	<div
		class="flex h-2 gap-0.5 overflow-hidden rounded-full"
		role={legend ? undefined : 'img'}
		aria-label={legend ? undefined : [label, counts].filter(Boolean).join(' ')}
		aria-hidden={legend ? 'true' : undefined}
	>
		<div class="bg-success" style:flex-grow={positive}></div>
		<div class="bg-control" style:flex-grow={neutral}></div>
		<div class="bg-destructive" style:flex-grow={negative}></div>
	</div>
	{#if legend}
		<span class="text-caption text-muted-foreground"
			>{[label, counts].filter(Boolean).join(' ')}</span
		>
	{/if}
</div>
