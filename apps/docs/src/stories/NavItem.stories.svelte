<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import { NavItem } from '@latitudelabs/design-system';

	const { Story } = defineMeta({
		title: 'Components/NavItem',
		component: NavItem,
		tags: ['autodocs'],
		args: { href: '#', current: false },
		parameters: {
			docs: {
				description: {
					component: `A top-level app navigation link, for the header nav. Square, no hover fill; the current
page gets a full-colour label and a soft brand glow rising from the bottom edge (\`current\`, which also sets
\`aria-current="page"\`). Wrap the items in a \`<nav aria-label>\`.`,
				},
			},
		},
	});
</script>

{#snippet template(args)}
	<NavItem {...args}>Projects</NavItem>
{/snippet}

<Story name="Default" {template} />
<Story name="Current" args={{ current: true }} {template} />

<Story name="Header nav">
	{#snippet template()}
		<nav class="flex items-center gap-1" aria-label="App">
			<NavItem href="#" current>Projects</NavItem>
			<NavItem href="#">Assets</NavItem>
			<NavItem href="#">Settings</NavItem>
		</nav>
	{/snippet}
</Story>
