<script lang="ts" module>
	/** Icon sizes in px. `sm` sits inside buttons and inputs; `md` is the default in UI; `lg` for empty states. */
	export const iconSizes = { sm: 16, md: 20, lg: 24 } as const;
	export type IconSize = keyof typeof iconSizes;
</script>

<script lang="ts">
	import type { LucideIcon, LucideProps } from '@lucide/svelte';
	import { cn } from '$lib/utils.js';

	type Props = Omit<LucideProps, 'size' | 'class'> & {
		class?: string;
		/** An icon from '@latitudelabs/design-system/icons', e.g. `icon={Search}`. */
		icon: LucideIcon;
		size?: IconSize;
		/**
		 * Accessible name. Leave empty for decorative icons next to text (hidden from screen readers);
		 * set it for icon-only meaning, e.g. a status icon with no text.
		 */
		label?: string;
	};

	let { icon: IconComponent, size = 'md', label, class: className, ...restProps }: Props = $props();
</script>

<IconComponent
	size={iconSizes[size]}
	strokeWidth={2}
	aria-hidden={label ? undefined : 'true'}
	aria-label={label}
	role={label ? 'img' : undefined}
	data-slot="icon"
	class={cn('shrink-0', className)}
	{...restProps}
/>
