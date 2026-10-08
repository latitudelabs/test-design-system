<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import { Button } from '@latitudelabs/design-system';
	import { CircleAlert, Icon, Search, Sparkles, Trash } from '@latitudelabs/design-system/icons';

	const { Story } = defineMeta({
		title: 'Components/Icon',
		component: Icon,
		tags: ['autodocs'],
		argTypes: { size: { control: 'select', options: ['sm', 'md', 'lg'] } },
		args: { icon: Search, size: 'md' },
		parameters: {
			docs: {
				description: {
					component: `Renders an icon from the curated set at a token size: \`sm\` 16px (in buttons and inputs), \`md\` 20px
(default), \`lg\` 24px. Decorative by default (hidden from screen readers). Pass \`label\` when the icon carries
meaning on its own.`,
				},
			},
		},
	});
</script>

<Story name="Default" />
<Story name="Sizes">
	<div class="flex items-center gap-4">
		<Icon icon={Sparkles} size="sm" />
		<Icon icon={Sparkles} size="md" />
		<Icon icon={Sparkles} size="lg" />
	</div>
</Story>
<Story name="Colored with text roles">
	<div class="flex items-center gap-4">
		<Icon icon={Search} class="text-muted-foreground" />
		<Icon icon={CircleAlert} class="text-destructive" label="Error" />
	</div>
</Story>
<Story name="In a button">
	<div class="flex gap-2">
		<Button variant="ghost"><Search data-icon="inline-start" />Search</Button>
		<Button variant="destructive"><Trash data-icon="inline-start" />Delete</Button>
		<Button variant="secondary" size="icon" aria-label="Search"><Search /></Button>
	</div>
</Story>
