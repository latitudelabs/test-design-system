<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import { SentimentBar } from '@latitudelabs/design-system';

	const { Story } = defineMeta({
		title: 'Components/SentimentBar',
		component: SentimentBar,
		tags: ['autodocs'],
		parameters: {
			docs: {
				description: {
					component: `How responses split by sentiment: positive (\`success\`), neutral (\`control\`) and negative
(\`destructive\`) segments sized by count, with the counts below. Without the legend (\`legend={false}\`, e.g. in a
tight table cell with the counts elsewhere) the bar gets an accessible label instead.`
				}
			}
		}
	});
</script>

<Story name="With legend" args={{ positive: 23, neutral: 10, negative: 7, label: 'Comment sentiment:' }}>
	{#snippet template(args)}<div class="w-[480px]"><SentimentBar {...args} /></div>{/snippet}
</Story>

<Story name="Bar only" args={{ positive: 2, neutral: 1, negative: 0, legend: false }}>
	{#snippet template(args)}<div class="w-48"><SentimentBar {...args} /></div>{/snippet}
</Story>
