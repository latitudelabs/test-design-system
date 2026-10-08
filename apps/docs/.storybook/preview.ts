import type { Preview } from '@storybook/svelte-vite';
import { withThemeByClassName } from '@storybook/addon-themes';
import '../src/docs.css';

const preview: Preview = {
	parameters: {
		layout: 'centered',
		controls: { matchers: { color: /(background|color)$/i } },
		// The canvas uses the theme's own `bg-background` (see docs.css), so it follows light/dark.
		backgrounds: { disable: true },
		options: {
			storySort: {
				order: ['Getting started', 'Foundations', ['Colors', 'Typography', 'Icons', 'Radius & elevation', 'Spacing', 'Brand'], 'Components', 'Patterns'],
			},
		},
		a11y: { test: 'error' },
	},
	decorators: [
		withThemeByClassName({
			themes: { Light: '', Dark: 'dark' },
			defaultTheme: 'Light',
			parentSelector: 'html',
		}),
	],
};

export default preview;
