<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import States from './examples/States.svelte';

	const { Story } = defineMeta({
		title: 'Patterns/Empty, loading & error states',
		parameters: {
			docs: {
				description: {
					component: `Every view that loads or lists data needs all three states, designed up front.

**Empty:** say what will appear and how to get there, with one next action. An icon from the set is enough; no
illustrations. Use an inner panel (\`rounded-sm bg-background\`) inside the card.

**Loading:** \`LoaderCircle\` with \`animate-spin\` and a \`label\`, plus \`aria-busy="true"\` on the region. Say what's
happening ("Analysing 24 responses…") and, if it's slow, roughly how long.

**Error:** a \`role="alert"\` banner on \`bg-destructive/10\`: what failed, reassurance if data is safe, and a way out
(**Try again**). Never show raw error codes or stack traces.`,
				},
			},
		},
	});
</script>

<Story name="States">
	<States />
</Story>
