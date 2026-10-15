<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import MarkdownDoc from '../lib/MarkdownDoc.svelte';
	// The page lives in getting-started.md next to this file (diagrams included); edit it there.
	import page from './getting-started.md?raw';

	const { Story } = defineMeta({
		title: 'Getting started',
		parameters: { layout: 'fullscreen', a11y: { disable: true } }
	});
</script>

<Story name="Getting started">
	<MarkdownDoc source={page} />
</Story>
