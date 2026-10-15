<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import { Card, Stat } from '@latitudelabs/design-system';

	const { Story } = defineMeta({
		title: 'Components/Stat',
		component: Stat,
		tags: ['autodocs'],
		parameters: {
			docs: {
				description: {
					component: `A key number on a muted tile: the value in \`text-heading\`, what it measures below. Format the value
yourself ("1,470", "4.7 / 5", "57%") and say what the number covers in the label ("Views, last 12 months").
Put a few side by side in a grid at the top of a card.`
				}
			}
		}
	});
</script>

<Story name="Single" args={{ value: '1,470', label: 'Views, last 12 months' }}>
	{#snippet template(args)}
		<Card.Root class="w-fit"><Card.Content><Stat {...args} /></Card.Content></Card.Root>
	{/snippet}
</Story>

<!-- Stat takes no children, so a story with several uses a template snippet. -->
<Story name="Row">
	{#snippet template()}
		<Card.Root class="w-fit">
			<Card.Content>
				<div class="grid w-[640px] grid-cols-4 gap-3">
					<Stat value="1,470" label="Views, last 12 months" />
					<Stat value="174" label="Responses" />
					<Stat value="4.7 / 5" label="Rating, 21 votes" />
					<Stat value="57%" label="Positive comments" />
				</div>
			</Card.Content>
		</Card.Root>
	{/snippet}
</Story>
