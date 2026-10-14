<script lang="ts">
	import { cn, type WithElementRef } from '$lib/utils.js';
	import type { HTMLTdAttributes } from 'svelte/elements';

	let {
		ref = $bindable(null),
		class: className,
		numeric = false,
		rowHeader = false,
		children,
		...restProps
	}: WithElementRef<HTMLTdAttributes, HTMLTableCellElement> & {
		/** Right-aligned, tabular figures: for numbers. */
		numeric?: boolean;
		/** Renders a row heading (`<th scope="row">`, medium weight): the label that names the row. */
		rowHeader?: boolean;
	} = $props();
</script>

<svelte:element
	this={rowHeader ? 'th' : 'td'}
	bind:this={ref}
	data-slot="table-cell"
	scope={rowHeader ? 'row' : undefined}
	class={cn(
		'py-2 pr-4 last:pr-0',
		rowHeader && 'text-left font-medium',
		numeric && 'text-right tabular-nums',
		className
	)}
	{...restProps}
>
	{@render children?.()}
</svelte:element>
