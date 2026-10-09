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
			class="relative grow overflow-hidden rounded-full bg-control data-horizontal:w-full group-data-[size=default]/slider:data-horizontal:h-2 group-data-[size=sm]/slider:data-horizontal:h-1.5 data-vertical:h-full group-data-[size=default]/slider:data-vertical:w-2 group-data-[size=sm]/slider:data-vertical:w-1.5"
		>
			<SliderPrimitive.Range
				data-slot="slider-range"
				class="absolute bg-primary select-none data-horizontal:h-full data-vertical:w-full"
			/>
		</span>
		{#each thumbItems as thumb (thumb.index)}
			<SliderPrimitive.Thumb
				data-slot="slider-thumb"
				index={thumb.index}
				aria-label={ariaLabel}
				aria-labelledby={ariaLabelledby}
				class="block shrink-0 cursor-grab rounded-full border-2 border-primary bg-card shadow-raised ring-ring/50 transition-[box-shadow] outline-none select-none group-data-[size=default]/slider:size-5 group-data-[size=sm]/slider:size-4 hover:ring-4 focus-visible:ring-4 active:cursor-grabbing data-disabled:pointer-events-none"
			/>
		{/each}
	{/snippet}
</SliderPrimitive.Root>
