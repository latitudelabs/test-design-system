<script lang="ts">
	import type { HTMLAnchorAttributes, HTMLAttributes, HTMLButtonAttributes } from 'svelte/elements';
	import { cn } from '$lib/utils.js';

	type Props = HTMLAttributes<HTMLElement> &
		Pick<HTMLAnchorAttributes, 'href'> &
		Pick<HTMLButtonAttributes, 'disabled' | 'type'> & {
			ref?: HTMLElement | null;
		};

	let {
		ref = $bindable(null),
		class: className,
		href,
		disabled,
		type = 'button',
		children,
		...restProps
	}: Props = $props();

	const base = 'flex flex-col gap-1 rounded-sm bg-muted p-3 text-left';
	const interactive =
		'transition-colors outline-none hover:bg-accent focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50';
</script>

<!-- A small muted surface for one item in a row or grid (a theme, a brand, a comment, a question's answers).
     With `href` it's a link, with `onclick` a button, otherwise a plain box. -->
{#if href}
	<a
		bind:this={ref}
		data-slot="tile"
		{href}
		class={cn(base, interactive, className)}
		{...restProps}
	>
		{@render children?.()}
	</a>
{:else if restProps.onclick}
	<button
		bind:this={ref}
		data-slot="tile"
		{type}
		{disabled}
		class={cn(base, interactive, className)}
		{...restProps}
	>
		{@render children?.()}
	</button>
{:else}
	<div bind:this={ref} data-slot="tile" class={cn(base, className)} {...restProps}>
		{@render children?.()}
	</div>
{/if}
