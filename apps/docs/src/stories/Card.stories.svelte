<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import { Share } from '@latitudelabs/design-system/icons';
	import { Button, Card, Tile } from '@latitudelabs/design-system';

	const { Story } = defineMeta({
		title: 'Components/Card',
		tags: ['autodocs'],
		parameters: {
			docs: {
				description: {
					component: `A white surface that groups related content on the page background. Cards are separated by the
\`shadow-hairline\` elevation, never by borders. Compose with \`Card.Header\`, \`Card.Title\`, \`Card.Description\`,
\`Card.Action\`, \`Card.Content\` and \`Card.Footer\`.

**Don't** nest cards inside cards. Use an inner panel (\`bg-background rounded-sm\`) instead.`,
				},
			},
		},
	});
</script>

<Story name="Default">
	<Card.Root class="w-[497px]">
		<Card.Header>
			<Card.Title>Insights</Card.Title>
			<Card.Description>ready when at least 10 responses</Card.Description>
		</Card.Header>
	</Card.Root>
</Story>

<Story name="With action and content">
	<Card.Root class="w-[640px]">
		<Card.Header>
			<Card.Title>What characters do people like the most?</Card.Title>
			<Card.Description>Viewer experience</Card.Description>
			<Card.Action>
				<Button variant="ghost" size="sm"><Share data-icon="inline-start" />Share</Button>
			</Card.Action>
		</Card.Header>
		<Card.Content>
			<div class="text-body-lg flex h-48 items-center justify-center rounded-sm bg-background">What’s your name?</div>
		</Card.Content>
	</Card.Root>
</Story>

<Story name="Small">
	<Card.Root size="sm" class="w-80">
		<Card.Header>
			<Card.Title>Scenes</Card.Title>
			<Card.Description>3 scenes</Card.Description>
		</Card.Header>
	</Card.Root>
</Story>

<Story
	name="With sections"
	parameters={{
		docs: {
			description: {
				story: `\`Card.Section\` groups a row of items inside a card: a toggle with the section's name and count, and one
row that scrolls sideways, with back/forward buttons when it overflows. Pass \`<li>\` items (give them a width).
Secondary sections start \`collapsed\`.`
			}
		}
	}}
>
	<Card.Root class="w-[520px]">
		<Card.Header>
			<Card.Title>Women Talking trailer</Card.Title>
			<Card.Description>1:41</Card.Description>
		</Card.Header>
		<Card.Content class="flex flex-col gap-5">
			<Card.Section title="Scenes" count={4}>
				{#each ['Introduction to the Colony', 'A Choice to Make', 'Rage, Hope, and Liberation', 'Title & Ensemble Credits'] as scene, i (scene)}
					<li class="flex w-36 flex-col gap-1">
						<div class="aspect-video w-full rounded-sm bg-muted"></div>
						<span class="text-caption">{scene}</span>
						<span class="text-caption text-muted-foreground">{['0:00', '0:25', '0:57', '1:30'][i]}</span>
					</li>
				{/each}
			</Card.Section>
			<Card.Section title="Themes" count={3} collapsed>
				{#each ['Faith and Forgiveness', 'Female Solidarity', 'Resistance to Abuse'] as theme (theme)}
					<li class="w-56"><Tile><span class="text-caption">{theme}</span></Tile></li>
				{/each}
			</Card.Section>
		</Card.Content>
	</Card.Root>
</Story>
