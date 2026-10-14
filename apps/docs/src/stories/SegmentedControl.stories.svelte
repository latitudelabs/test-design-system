<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import { Label, SegmentedControl } from '@latitudelabs/design-system';

	const { Story } = defineMeta({
		title: 'Components/SegmentedControl',
		component: SegmentedControl,
		tags: ['autodocs'],
		argTypes: { size: { control: 'select', options: ['sm', 'default'] } },
		args: {
			value: 'system',
			size: 'sm',
			options: [
				{ value: 'light', label: 'Light' },
				{ value: 'dark', label: 'Dark' },
				{ value: 'system', label: 'System' }
			]
		},
		parameters: {
			docs: {
				description: {
					component: `Pick one of 2–4 short options that **apply immediately** (theme, view mode). It's a radio
group: arrow keys move between options. Name it with \`aria-labelledby\` pointing at a visible \`Label\`.

Use a \`Switch\` for plain on/off, and a select for longer lists.`,
				},
			},
		},
	});
</script>

{#snippet template(args)}
	<div class="flex w-[430px] items-center justify-between gap-4 rounded-xl bg-card p-4 shadow-hairline">
		<Label id="theme-label">Theme</Label>
		<SegmentedControl aria-labelledby="theme-label" {...args} />
	</div>
{/snippet}

<Story name="Default" {template} />
<Story name="Default size" args={{ size: 'default' }} {template} />
