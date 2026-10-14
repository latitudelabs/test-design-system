<script lang="ts">
	import { cn, type WithElementRef } from '$lib/utils.js';
	import type { HTMLTableAttributes } from 'svelte/elements';

	let {
		ref = $bindable(null),
		class: className,
		children,
		...restProps
	}: WithElementRef<HTMLTableAttributes, HTMLTableElement> = $props();
</script>

<!-- Scrolls sideways on its own when the columns don't fit. -->
<div data-slot="table-container" class="relative w-full overflow-x-auto">
	<table bind:this={ref} data-slot="table" class={cn('w-full text-body', className)} {...restProps}>
		{@render children?.()}
	</table>
</div>
