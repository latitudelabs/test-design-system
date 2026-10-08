<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import { Label, Switch } from '@latitudelabs/design-system';

	const { Story } = defineMeta({
		title: 'Components/Switch',
		component: Switch,
		tags: ['autodocs'],
		argTypes: { size: { control: 'select', options: ['default', 'sm'] } },
		args: { checked: false, disabled: false, size: 'default' },
		parameters: {
			docs: {
				description: {
					component: `An on/off setting that **takes effect immediately** (email notifications, dark mode). Always pair it
with a visible \`Label\` (\`<Label for>\` + \`id\`), and keep the label describing the "on" state.

Use a **checkbox-style choice in a form** instead when the change only applies after pressing Save, and a pair of
buttons or radios when the two options aren't simply on/off.

The off track uses the \`control\` role so it stays visible (3:1) on cards in both themes.`,
				},
			},
		},
	});
</script>

{#snippet template(args)}
	<div class="flex items-center gap-3">
		<Switch id="notify" {...args} />
		<Label for="notify">Email notifications</Label>
	</div>
{/snippet}

<Story name="Off" {template} />
<Story name="On" args={{ checked: true }} {template} />
<Story name="Small" args={{ size: 'sm', checked: true }} {template} />
<Story name="Disabled" args={{ disabled: true }} {template} />

<Story name="Settings row">
	{#snippet template()}
		<div class="flex w-[430px] items-center justify-between gap-4 rounded-xl bg-card p-4 shadow-hairline">
			<div class="flex flex-col gap-1">
				<Label for="notify-row">Email notifications</Label>
				<span class="text-caption text-muted-foreground">Get an email when 10 people have responded.</span>
			</div>
			<Switch id="notify-row" checked />
		</div>
	{/snippet}
</Story>
