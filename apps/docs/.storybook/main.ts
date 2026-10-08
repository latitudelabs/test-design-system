import { fileURLToPath } from 'node:url';
import type { StorybookConfig } from '@storybook/svelte-vite';

const dsLib = fileURLToPath(new URL('../../../packages/design-system/src/lib', import.meta.url));

const config: StorybookConfig = {
	stories: ['../src/**/*.mdx', '../src/**/*.stories.@(ts|svelte)'],
	addons: ['@storybook/addon-docs', '@storybook/addon-a11y', '@storybook/addon-svelte-csf', '@storybook/addon-themes'],
	framework: '@storybook/svelte-vite',
	staticDirs: ['../static'],
	async viteFinal(config) {
		config.resolve ??= {};
		const existing = config.resolve.alias ?? [];
		// Point at the design system's source (not dist/) so edits hot-reload without a package build.
		config.resolve.alias = [
			{ find: /^@latitudelabs\/design-system$/, replacement: `${dsLib}/index.ts` },
			{ find: /^@latitudelabs\/design-system\/(.+)\.css(\?.*)?$/, replacement: `${dsLib}/styles/$1.css$2` },
			{ find: /^\$lib(\/.*)?$/, replacement: `${dsLib}$1` },
			...(Array.isArray(existing)
				? existing
				: Object.entries(existing).map(([find, replacement]) => ({ find, replacement }))),
		];
		return config;
	},
};

export default config;
