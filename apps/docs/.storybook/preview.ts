import type { Preview } from '@storybook/svelte-vite';
import '../src/docs.css';

const preview: Preview = {
	parameters: {
		layout: 'centered',
		controls: { matchers: { color: /(background|color)$/i } },
		backgrounds: {
			options: {
				page: { name: 'Page', value: '#f2f2f2' },
				card: { name: 'Card', value: '#ffffff' },
			},
		},
		options: {
			storySort: {
				order: ['Getting started', 'Foundations', ['Colors', 'Typography', 'Radius & elevation', 'Spacing', 'Brand'], 'Components', 'Patterns'],
			},
		},
		a11y: { test: 'error' },
	},
	initialGlobals: { backgrounds: { value: 'page' } },
};

export default preview;
