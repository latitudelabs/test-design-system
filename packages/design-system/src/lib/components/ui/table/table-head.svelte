<script lang="ts">
	import { cn, type WithElementRef } from '$lib/utils.js';
	import type { HTMLThAttributes } from 'svelte/elements';

	let {
		ref = $bindable(null),
		class: className,
		numeric = false,
		scope = 'col',
		children,
		...restProps
	}: WithElementRef<HTMLThAttributes, HTMLTableCellElement> & {
		/** Right-aligns the heading over a column of numbers. */
		numeric?: boolean;
	} = $props();
</script>

<!-- Column heading. For a row's label (first cell of a body row), use Table.Cell with `rowHeader`. -->
<th
	bind:this={ref}
	data-slot="table-head"
	{scope}
	class={cn(
		'py-2 pr-4 text-caption font-medium text-muted-foreground last:pr-0',
		numeric ? 'text-right' : 'text-left',
		className
	)}
	{...restProps}
>
	{@render children?.()}
</th>
