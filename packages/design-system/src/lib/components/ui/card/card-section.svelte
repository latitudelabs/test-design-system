<script lang="ts">
	import ChevronDown from '@lucide/svelte/icons/chevron-down';
	import ChevronLeft from '@lucide/svelte/icons/chevron-left';
	import ChevronRight from '@lucide/svelte/icons/chevron-right';
	import type { HTMLAttributes } from 'svelte/elements';
	import { cn, type WithElementRef } from '$lib/utils.js';
	import { Button } from '../button/index.js';

	type Props = WithElementRef<HTMLAttributes<HTMLElement>> & {
		/** Section name, shown as the toggle. */
		title: string;
		/** Number of items, shown after the title. */
		count?: number;
		/** Start closed. Secondary sections (themes, brands) start closed; the main ones open. */
		collapsed?: boolean;
	};

	let {
		ref = $bindable(null),
		class: className,
		title,
		count,
		collapsed = false,
		children,
		...restProps
	}: Props = $props();

	// svelte-ignore state_referenced_locally
	let open = $state(!collapsed);
	let row = $state<HTMLUListElement>();
	let atStart = $state(true);
	let atEnd = $state(true);
	const id = $props.id();

	function measure() {
		if (!row) return;
		atStart = row.scrollLeft <= 1;
		atEnd = row.scrollLeft + row.clientWidth >= row.scrollWidth - 1;
	}

	$effect(() => {
		if (!row) return;
		const observer = new ResizeObserver(measure);
		observer.observe(row);
		return () => observer.disconnect();
	});

	const page = (dir: 1 | -1) =>
		row?.scrollBy({ left: dir * row.clientWidth * 0.8, behavior: 'smooth' });
</script>

<!-- A collapsible group inside a card: its items (pass <li> elements) sit in one row that scrolls sideways, with
     back/forward buttons when it overflows. -->
<section
	bind:this={ref}
	data-slot="card-section"
	class={cn('flex flex-col gap-2', className)}
	{...restProps}
>
	<div class="flex items-center justify-between gap-2">
		<button
			type="button"
			aria-expanded={open}
			aria-controls={id}
			onclick={() => (open = !open)}
			class="flex items-center gap-1 rounded-sm text-body text-muted-foreground outline-none hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring"
		>
			{title}{#if count !== undefined}<span>&nbsp;· {count}</span>{/if}
			<ChevronDown
				class={cn('size-4 transition-transform', !open && '-rotate-90')}
				aria-hidden="true"
			/>
		</button>
		{#if open && !(atStart && atEnd)}
			<div class="flex gap-1">
				<Button
					variant="ghost"
					size="icon-xs"
					aria-label="Scroll {title} back"
					disabled={atStart}
					onclick={() => page(-1)}
				>
					<ChevronLeft />
				</Button>
				<Button
					variant="ghost"
					size="icon-xs"
					aria-label="Scroll {title} forward"
					disabled={atEnd}
					onclick={() => page(1)}
				>
					<ChevronRight />
				</Button>
			</div>
		{/if}
	</div>
	{#if open}
		<ul
			{id}
			bind:this={row}
			onscroll={measure}
			class="flex snap-x gap-3 overflow-x-auto pb-1 *:shrink-0 *:snap-start"
		>
			{@render children?.()}
		</ul>
	{/if}
</section>
