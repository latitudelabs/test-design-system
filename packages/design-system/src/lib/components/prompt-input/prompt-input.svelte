<script lang="ts">
	import ArrowUp from '@lucide/svelte/icons/arrow-up';
	import type { HTMLInputAttributes } from 'svelte/elements';
	import { cn, type WithElementRef } from '$lib/utils.js';

	type Props = WithElementRef<Omit<HTMLInputAttributes, 'value' | 'type'>, HTMLInputElement> & {
		value?: string;
		/** Called with the current value on Enter or the send button. Not called when empty. */
		onsubmit?: (value: string) => void;
		/** Accessible name for the field. Defaults to the placeholder, then "Message". */
		label?: string;
		/** Accessible name for the send button. */
		submitLabel?: string;
	};

	let {
		ref = $bindable(null),
		value = $bindable(''),
		placeholder,
		disabled,
		onsubmit,
		label,
		submitLabel = 'Send',
		class: className,
		...restProps
	}: Props = $props();

	const canSubmit = $derived(!disabled && value.trim().length > 0);

	function handleSubmit(event: SubmitEvent) {
		event.preventDefault();
		if (canSubmit) onsubmit?.(value);
	}
</script>

<form
	data-slot="prompt-input"
	class={cn(
		'flex h-12 w-full items-center gap-2 rounded-lg bg-input py-1 pr-1 pl-5 transition-[box-shadow] focus-within:ring-3 focus-within:ring-ring/50 has-disabled:opacity-50 has-aria-invalid:ring-destructive/20',
		className
	)}
	onsubmit={handleSubmit}
>
	<input
		bind:this={ref}
		bind:value
		type="text"
		{placeholder}
		{disabled}
		aria-label={label ?? placeholder ?? 'Message'}
		class="min-w-0 flex-1 bg-transparent text-body-lg outline-none placeholder:text-placeholder disabled:cursor-not-allowed"
		{...restProps}
	/>
	<button
		type="submit"
		aria-label={submitLabel}
		disabled={!canSubmit}
		class="flex h-full w-16 shrink-0 items-center justify-center rounded-md bg-card text-placeholder transition-colors outline-none focus-visible:ring-3 focus-visible:ring-ring/50 enabled:cursor-pointer enabled:hover:text-foreground"
	>
		<ArrowUp class="size-4" />
	</button>
</form>
