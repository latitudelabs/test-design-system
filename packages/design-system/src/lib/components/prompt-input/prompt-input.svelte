<script lang="ts">
	import ArrowUp from '@lucide/svelte/icons/arrow-up';
	import type { Snippet } from 'svelte';
	import type { HTMLTextareaAttributes } from 'svelte/elements';
	import { cn, type WithElementRef } from '$lib/utils.js';

	type Props = WithElementRef<
		Omit<HTMLTextareaAttributes, 'value' | 'rows' | 'onsubmit'>,
		HTMLTextAreaElement
	> & {
		value?: string;
		/** Called with the current value on Enter or the send button. Not called when empty. */
		onsubmit?: (value: string) => void;
		/** Placeholder shown while the field has focus (the regular one otherwise). */
		focusedPlaceholder?: string;
		/** Accessible name for the field. Defaults to the placeholder, then "Message". */
		label?: string;
		/** Accessible name for the send button. */
		submitLabel?: string;
		/** The field grows with its text up to this many lines, then scrolls. 1 keeps it single-line. */
		maxLines?: number;
		/** Shown before the text, e.g. a `Kbd` hint. The left padding tightens to make room. */
		leading?: Snippet;
		/** Show the send button only while the field has focus. It keeps its space, so nothing shifts. */
		submitOnFocus?: boolean;
	};

	let {
		ref = $bindable(null),
		value = $bindable(''),
		placeholder,
		focusedPlaceholder,
		disabled = false,
		onsubmit,
		label,
		submitLabel = 'Send',
		maxLines = 4,
		leading,
		submitOnFocus = false,
		class: className,
		onfocus,
		onblur,
		onkeydown,
		...restProps
	}: Props = $props();

	const canSubmit = $derived(!disabled && value.trim().length > 0);
	let focused = $state(false);

	function submit() {
		if (canSubmit) onsubmit?.(value);
	}

	// Enter sends, Shift+Enter adds a line.
	function handleKeydown(event: KeyboardEvent & { currentTarget: HTMLTextAreaElement }) {
		onkeydown?.(event);
		if (event.defaultPrevented) return;
		if (event.key === 'Enter' && !event.shiftKey && !event.isComposing) {
			event.preventDefault();
			submit();
		}
	}

	// Grow with the content up to maxLines; beyond that the textarea scrolls.
	function resize() {
		if (!ref) return;
		const style = getComputedStyle(ref);
		const line = parseFloat(style.lineHeight);
		const padding = parseFloat(style.paddingTop) + parseFloat(style.paddingBottom);
		ref.style.height = 'auto';
		ref.style.height = `${Math.min(ref.scrollHeight, line * maxLines + padding)}px`;
	}
	$effect(() => {
		void value; // also shrinks back after the value is cleared on send
		resize();
	});
</script>

<form
	data-slot="prompt-input"
	class={cn(
		'group flex min-h-12 w-full items-stretch gap-2 rounded-lg bg-input py-1 pr-1 transition-[box-shadow,opacity] focus-within:ring-3 focus-within:ring-ring/50 has-aria-invalid:ring-destructive/20',
		leading ? 'pl-2' : 'pl-5',
		disabled && 'opacity-50',
		className
	)}
	onsubmit={(event) => {
		event.preventDefault();
		submit();
	}}
>
	{#if leading}
		<div data-slot="prompt-input-leading" class="mr-4 flex items-center">{@render leading()}</div>
	{/if}
	<!-- Disabled is read-only rather than disabled: browsers drop focus from disabled fields, and a prompt usually
	     wants to keep it while the answer is on its way. -->
	<textarea
		bind:this={ref}
		bind:value
		rows="1"
		placeholder={focused ? (focusedPlaceholder ?? placeholder) : placeholder}
		readonly={disabled}
		aria-disabled={disabled}
		aria-label={label ?? placeholder ?? 'Message'}
		class={cn(
			'min-w-0 flex-1 resize-none self-center bg-transparent py-2 text-body-lg outline-none placeholder:text-placeholder',
			disabled && 'cursor-not-allowed'
		)}
		onfocus={(event) => {
			focused = true;
			onfocus?.(event);
		}}
		onblur={(event) => {
			focused = false;
			onblur?.(event);
		}}
		onkeydown={handleKeydown}
		{...restProps}></textarea>
	<button
		type="submit"
		aria-label={submitLabel}
		disabled={!canSubmit}
		class={cn(
			'flex min-h-10 w-16 shrink-0 items-center justify-center rounded-md bg-card text-placeholder transition-[color,opacity] outline-none focus-visible:ring-3 focus-visible:ring-ring/50 enabled:cursor-pointer enabled:hover:text-foreground',
			// Opacity only (it stays clickable), so a click that blurs the field before it lands still sends.
			submitOnFocus && 'opacity-0 group-focus-within:opacity-100'
		)}
	>
		<ArrowUp class="size-4" />
	</button>
</form>
