<script lang="ts">
	import type { HTMLAnchorAttributes } from 'svelte/elements';
	import { cn, type WithElementRef } from '$lib/utils.js';
	import { buttonVariants } from '../ui/button/index.js';

	type Props = WithElementRef<HTMLAnchorAttributes, HTMLAnchorElement> & {
		/** The page this link points to is the one being shown: full-colour label and the brand glow underneath. */
		current?: boolean;
	};

	let {
		ref = $bindable(null),
		href,
		current = false,
		class: className,
		children,
		...restProps
	}: Props = $props();

	// The glow: four blurred brand-colour ellipses rising from the bottom edge. Ported from the nav design (a 69x29
	// frame); positions are % of the item, so it scales with the label.
	const glow = [
		{ colour: 'var(--brand-1)', left: 31.4, top: 110 },
		{ colour: 'var(--brand-2)', left: 36.4, top: 94.5 },
		{ colour: 'var(--brand-3)', left: 14.8, top: 88.3 },
		{ colour: 'var(--brand-4)', left: -0.3, top: 105.9 }
	];
</script>

<!-- A top-level app navigation link (header nav). Square, no hover fill: the current page is marked by the glow. -->
<a
	bind:this={ref}
	data-slot="nav-item"
	{href}
	aria-current={current ? 'page' : undefined}
	class={cn(
		buttonVariants({ variant: 'ghost' }),
		'relative overflow-hidden rounded-none text-title hover:bg-transparent dark:hover:bg-transparent',
		current ? 'text-foreground' : 'text-muted-foreground',
		className
	)}
	{...restProps}
>
	{#if current}
		<span class="pointer-events-none absolute inset-0 opacity-67" aria-hidden="true">
			{#each glow as g (g.colour)}
				<span
					class="absolute h-[36%] w-[58%] rounded-full blur-[4px]"
					style:background={g.colour}
					style:left="{g.left}%"
					style:top="{g.top}%"
				></span>
			{/each}
		</span>
	{/if}
	<span class="relative">{@render children?.()}</span>
</a>
