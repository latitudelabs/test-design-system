// Parses the design system's CSS so the Foundations pages always show what ships.
import tokensCss from '@latitudelabs/design-system/tokens.css?raw';
import themeCss from '@latitudelabs/design-system/theme.css?raw';

export type Token = { name: string; value: string; comment?: string };

function parse(css: string, block: RegExp): Token[] {
	const body = css.match(block)?.[1] ?? '';
	return [...body.matchAll(/(--[\w-]+):\s*([^;]+);[ \t]*(?:\/\*\s*(.*?)\s*\*\/)?/g)].map(([, name, value, comment]) => ({
		name,
		value: value.trim().replace(/\(\s+/g, '(').replace(/\s+\)/g, ')').replace(/\s+/g, ' '),
		comment,
	}));
}

/** Raw brand values (tokens.css :root). */
export const primitives = parse(tokensCss, /:root\s*\{([\s\S]*?)\n\}/);
/** Semantic roles, light theme (theme.css :root). */
export const roles = parse(themeCss, /:root\s*\{([\s\S]*?)\n\}/);
/** Semantic roles, dark theme (theme.css .dark). */
export const darkRoles = parse(themeCss, /\.dark\s*\{([\s\S]*?)\n\}/);
/** Tailwind theme (theme.css @theme inline). */
export const theme = parse(themeCss, /@theme inline\s*\{([\s\S]*?)\n\}/);

export const resolve = (value: string): string => {
	const ref = value.match(/^var\((--[\w-]+)\)$/)?.[1];
	const hit = ref && [...primitives, ...roles].find((t) => t.name === ref);
	return hit ? resolve(hit.value) : value;
};

/** Text styles defined as Tailwind `text-*` utilities, grouped with their sub-properties. */
export const textStyles = theme
	.filter((t) => /^--text-[\w-]+$/.test(t.name) && !t.name.includes('--', 2))
	.map((t) => {
		const key = t.name.replace('--text-', '');
		const prop = (p: string) => theme.find((x) => x.name === `--text-${key}--${p}`)?.value;
		return {
			name: key,
			size: t.value,
			lineHeight: prop('line-height') ?? 'normal',
			letterSpacing: prop('letter-spacing') ?? '0',
			fontWeight: prop('font-weight') ?? '400',
		};
	});

export const byPrefix = (list: Token[], prefix: string) => list.filter((t) => t.name.startsWith(prefix));
