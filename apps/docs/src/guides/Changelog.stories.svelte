<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import MarkdownDoc from '../lib/MarkdownDoc.svelte';
	// The changelog lives in packages/design-system/CHANGELOG.md; edit it there.
	import changelog from '../../../../packages/design-system/CHANGELOG.md?raw';

	const { Story } = defineMeta({
		title: 'Changelog',
		parameters: { layout: 'fullscreen', a11y: { disable: true } }
	});
</script>

<Story name="Changelog">
	<MarkdownDoc source={changelog} />
</Story>
