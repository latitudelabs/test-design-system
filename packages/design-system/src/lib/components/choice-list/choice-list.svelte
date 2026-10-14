<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';
	import { cn, type WithElementRef } from '$lib/utils.js';
	import { buttonVariants } from '../ui/button/index.js';
	import Kbd from '../kbd/kbd.svelte';

	type Props = WithElementRef<Omit<HTMLAttributes<HTMLDivElement>, 'onselect'>> & {
		/** Short answers, written as the user would say them. */
		options: string[];
		/** Called with the picked option and its index. */
		onselect?: (option: string, index: number) => void;
		/** Show a `Kbd` number before each option (1, 2, 3…). Wiring number keys up is up to the app. */
		numbered?: boolean;
		/** Accessible name for the group. */
		label?: string;
		disabled?: boolean;
	};

	let {
		ref = $bindable(null),
		options,
		onselect,
		numbered = true,
		label = 'Suggested answers',
		disabled = false,
		class: className,
		...restProps
	}: Props = $props();
</script>

<!--
	Answers the assistant offers, one click each. Sized like PromptInput, so the list can sit right above one (with
	`leading` showing the next number) for "something else". Placed flush with a ChatMessage, the numbers centre under
	its avatar and the labels line up with the message text.
-->
<div
	bind:this={ref}
	data-slot="choice-list"
	role="group"
	aria-label={label}
	class={cn('flex flex-col gap-1', className)}
	{...restProps}
>
	{#each options as option, i (option)}
		<!-- --index lets apps stagger an entrance animation. -->
		<button
			type="button"
			data-slot="choice"
			style:--index={i}
			{disabled}
			class={cn(
				buttonVariants({ variant: 'secondary', size: 'lg' }),
				'h-12 w-full justify-start rounded-lg border-0 text-body-lg font-normal',
				numbered ? 'gap-6 pl-2' : 'pl-5'
			)}
			onclick={() => onselect?.(option, i)}
		>
			{#if numbered}<Kbd aria-hidden="true">{i + 1}</Kbd>{/if}
			<span class="truncate">{option}</span>
		</button>
	{/each}
</div>
