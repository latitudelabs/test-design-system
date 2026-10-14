<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import { Progress } from '@latitudelabs/design-system';

	const { Story } = defineMeta({
		title: 'Components/Progress',
		component: Progress,
		tags: ['autodocs'],
		args: { value: 40, max: 100, 'aria-label': 'Upload progress' },
		parameters: {
			docs: {
				description: {
					component: `How far a known-length task has got (an upload, processing). Name it with \`aria-label\` or
\`aria-labelledby\`, and show the percentage as text next to it when it matters.`,
				},
			},
		},
	});
</script>

{#snippet template(args)}
	<div class="flex w-[430px] items-center gap-3">
		<Progress {...args} />
		<span class="w-10 text-right text-caption text-muted-foreground">{args.value}%</span>
	</div>
{/snippet}

<Story name="Default" {template} />
<Story name="Done" args={{ value: 100 }} {template} />
