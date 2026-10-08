<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import { Breadcrumb } from '@latitudelabs/design-system';

	const { Story } = defineMeta({
		title: 'Components/Breadcrumb',
		tags: ['autodocs'],
		parameters: {
			docs: {
				description: {
					component: `Shows where the current page sits, top-left in the app header. Earlier levels are links in
\`muted-foreground\`; the current page is \`foreground\` and not a link.`,
				},
			},
		},
	});
</script>

<Story name="Default">
	<Breadcrumb.Root>
		<Breadcrumb.List>
			<Breadcrumb.Item><Breadcrumb.Link href="#projects">Projects</Breadcrumb.Link></Breadcrumb.Item>
			<Breadcrumb.Separator>/</Breadcrumb.Separator>
			<Breadcrumb.Item><Breadcrumb.Page>New</Breadcrumb.Page></Breadcrumb.Item>
		</Breadcrumb.List>
	</Breadcrumb.Root>
</Story>
