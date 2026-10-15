<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import { Card, Tile } from '@latitudelabs/design-system';

	const { Story } = defineMeta({
		title: 'Components/Tile',
		component: Tile,
		tags: ['autodocs'],
		parameters: {
			docs: {
				description: {
					component: `A small muted surface for one item in a row or grid inside a card: a theme, a brand, a comment, a
question's answers. Give it a width from the layout. With \`href\` it renders a link and with \`onclick\` a
button (hover and focus states); otherwise a plain box. Content is up to you: usually a \`text-caption\` title and a
muted caption below.`
				}
			}
		}
	});
</script>

<Story name="Plain">
	<Card.Root class="w-fit"><Card.Content>
	<Tile class="w-56">
		<span class="text-caption">Female Solidarity</span>
		<span class="line-clamp-3 text-caption text-muted-foreground"
			>The collective bonding, shared grief and consensus-building among the women.</span
		>
	</Tile>
</Card.Content></Card.Root>
</Story>

<Story name="Button">
	<Card.Root class="w-fit"><Card.Content>
	<Tile class="w-44" onclick={() => {}}>
		<span class="text-caption">Orion Pictures</span>
		<span class="text-caption text-muted-foreground">Theatrical Movies · 0:10</span>
	</Tile>
</Card.Content></Card.Root>
</Story>

<Story name="Row of comments">
	<Card.Root class="w-fit"><Card.Content>
	<ul class="flex gap-3">
		{#each [['“What a dynamic start!”', '0:12 · excitement'], ['“Love the transition”', '0:04 · admiration'], ['“Don’t like spits”', '0:19 · disgust']] as [text, meta] (text)}
			<li class="w-56">
				<Tile><span class="text-caption">{text}</span><span class="text-caption text-muted-foreground">{meta}</span></Tile>
			</li>
		{/each}
	</ul>
</Card.Content></Card.Root>
</Story>
