<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import { Badge } from '@latitudelabs/design-system';

	const { Story } = defineMeta({
		title: 'Components/Badge',
		component: Badge,
		tags: ['autodocs'],
		argTypes: { variant: { control: 'select', options: ['default', 'secondary', 'outline', 'success', 'destructive', 'ghost'] } },
		args: { variant: 'default' },
		parameters: {
			docs: {
				description: {
					component: `A short status or count, like the active step number. Keep it to a word or a number.
\`success\` marks something done or healthy, \`destructive\` a failure.
**Don't** use badges as buttons. If it's clickable, it's a \`Button\`.`,
				},
			},
		},
	});
</script>

{#snippet template(args)}
	<Badge {...args}>1.</Badge>
{/snippet}

<Story name="Default" {template} />
<Story name="Secondary" args={{ variant: 'secondary' }} {template} />
<Story name="Outline" args={{ variant: 'outline' }} {template} />
<Story name="Success" args={{ variant: 'success' }}>
	{#snippet template(args)}<Badge {...args}>Analysed</Badge>{/snippet}
</Story>
<Story name="Destructive" args={{ variant: 'destructive' }}>
	{#snippet template(args)}<Badge {...args}>Failed</Badge>{/snippet}
</Story>
