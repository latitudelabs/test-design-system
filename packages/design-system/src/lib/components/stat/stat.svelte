<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';
	import { cn, type WithElementRef } from '$lib/utils.js';

	type Props = WithElementRef<HTMLAttributes<HTMLDivElement>> & {
		/** The figure, already formatted ("1,470", "4.7 / 5", "57%"). */
		value: string | number;
		/** What it measures, and over what if it matters ("Views, last 12 months"). */
		label: string;
	};

	let { ref = $bindable(null), class: className, value, label, ...restProps }: Props = $props();
</script>

<!-- A key number on a muted tile: the value large, what it is below. Several sit side by side in a grid. -->
<div
	bind:this={ref}
	data-slot="stat"
	class={cn('flex flex-col gap-1 rounded-sm bg-muted p-3', className)}
	{...restProps}
>
	<span class="text-heading">{value}</span>
	<span class="text-caption text-muted-foreground">{label}</span>
</div>
