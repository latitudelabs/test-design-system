<script lang="ts">
	import { Button, Card } from '$lib/index.js';
</script>

<main class="p-8">
	<Card.Root class="max-w-md">
		<Card.Header>
			<Card.Title>Dev playground</Card.Title>
			<Card.Description>Docs live in Storybook: pnpm dev at the repo root.</Card.Description>
		</Card.Header>
		<Card.Content><Button>Button</Button></Card.Content>
	</Card.Root>
</main>
