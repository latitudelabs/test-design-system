<script lang="ts">
	import { Progress as ProgressPrimitive } from 'bits-ui';
	import { cn, type WithoutChildrenOrChild } from '$lib/utils.js';

	let {
		ref = $bindable(null),
		class: className,
		max = 100,
		value,
		...restProps
	}: WithoutChildrenOrChild<ProgressPrimitive.RootProps> = $props();
</script>

<!-- Determinate progress (upload, processing). Give it an accessible name with aria-label or aria-labelledby. -->
<ProgressPrimitive.Root
	bind:ref
	data-slot="progress"
	{max}
	{value}
	class={cn('relative h-2 w-full overflow-hidden rounded-full bg-muted', className)}
	{...restProps}
>
	<div
		data-slot="progress-indicator"
		class="h-full rounded-full bg-primary transition-[width] duration-300"
		style:width="{((value ?? 0) / (max ?? 100)) * 100}%"
	></div>
</ProgressPrimitive.Root>
