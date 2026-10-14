<script lang="ts" module>
	export type SegmentedOption = { value: string; label: string; disabled?: boolean };
</script>

<script lang="ts">
	import { RadioGroup as RadioGroupPrimitive } from 'bits-ui';
	import { cn } from '$lib/utils.js';
	import { buttonVariants } from '../ui/button/index.js';

	// Own prop types rather than bits-ui's, so apps get them even when bits-ui's declarations don't resolve from
	// inside the package.
	let {
		ref = $bindable(null),
		value = $bindable(''),
		onValueChange,
		options,
		size = 'sm',
		disabled = false,
		name,
		id,
		'aria-label': ariaLabel,
		'aria-labelledby': ariaLabelledby,
		'aria-describedby': ariaDescribedby,
		class: className
	}: {
		ref?: HTMLElement | null;
		/** The selected option's `value`. */
		value?: string;
		/** Called with the newly selected `value`. */
		onValueChange?: (value: string) => void;
		options: SegmentedOption[];
		size?: 'sm' | 'default';
		disabled?: boolean;
		/** Form field name, if it's part of a form. */
		name?: string;
		id?: string;
		'aria-label'?: string;
		'aria-labelledby'?: string;
		'aria-describedby'?: string;
		class?: string;
	} = $props();
</script>

<!-- Pick one of a few short options that apply immediately (theme, view mode). A radio group: arrow keys move
     between options. Name it with aria-label or aria-labelledby. -->
<RadioGroupPrimitive.Root
	bind:ref
	bind:value
	{onValueChange}
	{disabled}
	{name}
	orientation="horizontal"
	{id}
	aria-label={ariaLabel}
	aria-labelledby={ariaLabelledby}
	aria-describedby={ariaDescribedby}
	data-slot="segmented-control"
	class={cn('flex gap-1', className)}
>
	{#each options as option (option.value)}
		<RadioGroupPrimitive.Item
			value={option.value}
			disabled={option.disabled}
			data-slot="segmented-control-item"
			class={cn(
				buttonVariants({ variant: 'ghost', size }),
				'cursor-pointer data-[state=checked]:bg-secondary data-[state=checked]:text-secondary-foreground'
			)}
		>
			{option.label}
		</RadioGroupPrimitive.Item>
	{/each}
</RadioGroupPrimitive.Root>
