import { createCn } from 'cn/config';

/**
 * Merges class names and resolves Tailwind conflicts (later wins).
 *
 * Extended with the design system's custom utilities so they're grouped correctly. Without this,
 * `text-caption` looks like a color and would silently drop `text-muted-foreground`.
 */
export const cn = createCn({
	extend: {
		classGroups: {
			'font-size': [{ text: ['heading', 'title', 'body-lg', 'body', 'caption', 'body-sm'] }],
			shadow: [{ shadow: ['hairline', 'raised'] }],
			'bg-image': [{ bg: ['brand'] }]
		}
	}
});

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type WithoutChild<T> = T extends { child?: any } ? Omit<T, 'child'> : T;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type WithoutChildren<T> = T extends { children?: any } ? Omit<T, 'children'> : T;
export type WithoutChildrenOrChild<T> = WithoutChildren<WithoutChild<T>>;
export type WithElementRef<T, U extends HTMLElement = HTMLElement> = T & { ref?: U | null };
