<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import { Share } from '@latitudelabs/design-system/icons';
	import { Button, Card } from '@latitudelabs/design-system';

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
