<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';
	import { cn, type WithElementRef } from '$lib/utils.js';

	let {
		ref = $bindable(null),
		class: className,
		children,
		...restProps
	}: WithElementRef<HTMLAttributes<HTMLElement>> = $props();
</script>

<!-- A key hint: a small outlined box around a key or number (e.g. "1" before a choice). -->
<kbd
	bind:this={ref}
	data-slot="kbd"
	class={cn(
		'inline-flex h-6 min-w-6 shrink-0 items-center justify-center rounded-sm border border-border px-1 font-sans text-caption text-muted-foreground',
		className
	)}
	{...restProps}>{@render children?.()}</kbd
>
