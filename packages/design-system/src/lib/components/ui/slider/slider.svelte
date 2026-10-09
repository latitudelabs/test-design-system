<script lang="ts">
	import { Slider as SliderPrimitive } from 'bits-ui';
	import { cn, type WithoutChildrenOrChild } from '$lib/utils.js';

	let {
		ref = $bindable(null),
		value = $bindable(),
		orientation = 'horizontal',
		size = 'default',
		'aria-label': ariaLabel,
		'aria-labelledby': ariaLabelledby,
		class: className,
		...restProps
	}: WithoutChildrenOrChild<SliderPrimitive.RootProps> & {
		size?: 'sm' | 'default';
	} = $props();
</script>

<!--
Discriminated Unions + Destructing (required for bindable) do not
get along, so we shut typescript up by casting `value` to `never`.
The thumbs carry role="slider", so the accessible name goes on them.
-->
<SliderPrimitive.Root
	bind:ref
	bind:value={value as never}
	data-slot="slider"
	data-size={size}
	{orientation}
	class={cn(
		'group/slider relative flex w-full touch-none items-center select-none data-disabled:cursor-not-allowed data-disabled:opacity-50 data-vertical:h-full data-vertical:min-h-40 data-vertical:w-auto data-vertical:flex-col',
		className
	)}
	{...restProps}
>
	{#snippet children({ thumbItems })}
		<span
			data-slot="slider-track"
			data-orientation={orientation}
			class="relative grow bg-border data-horizontal:w-full group-data-[size=default]/slider:data-horizontal:h-4 group-data-[size=sm]/slider:data-horizontal:h-3 data-vertical:h-full group-data-[size=default]/slider:data-vertical:w-4 group-data-[size=sm]/slider:data-vertical:w-3"
		>
			<SliderPrimitive.Range
				data-slot="slider-range"
				class="absolute bg-control select-none data-horizontal:h-full data-vertical:w-full"
			/>
		</span>
		{#each thumbItems as thumb (thumb.index)}
			<SliderPrimitive.Thumb
				data-slot="slider-thumb"
				index={thumb.index}
				aria-label={ariaLabel}
				aria-labelledby={ariaLabelledby}
				class="block shrink-0 cursor-grab bg-primary ring-ring/50 transition-[box-shadow] outline-none select-none focus-visible:ring-4 active:cursor-grabbing data-disabled:pointer-events-none group-data-[size=default]/slider:data-horizontal:h-4 group-data-[size=default]/slider:data-horizontal:w-7 group-data-[size=sm]/slider:data-horizontal:h-3 group-data-[size=sm]/slider:data-horizontal:w-5 group-data-[size=default]/slider:data-vertical:h-7 group-data-[size=default]/slider:data-vertical:w-4 group-data-[size=sm]/slider:data-vertical:h-5 group-data-[size=sm]/slider:data-vertical:w-3"
			/>
		{/each}
	{/snippet}
</SliderPrimitive.Root>
