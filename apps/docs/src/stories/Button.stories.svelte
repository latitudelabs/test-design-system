<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import { fn } from 'storybook/test';
	import ArrowUp from '@lucide/svelte/icons/arrow-up';
	import Share from '@lucide/svelte/icons/share';
	import { Button } from '@latitudelabs/design-system';

	const { Story } = defineMeta({
		title: 'Components/Button',
		component: Button,
		tags: ['autodocs'],
		argTypes: {
			variant: { control: 'select', options: ['default', 'secondary', 'outline', 'ghost', 'destructive', 'link'] },
			size: { control: 'select', options: ['default', 'xs', 'sm', 'lg', 'icon', 'icon-xs', 'icon-sm', 'icon-lg'] },
			disabled: { control: 'boolean' },
		},
		args: { variant: 'default', size: 'default', disabled: false, onclick: fn() },
		parameters: {
			docs: {
				description: {
					component: `Triggers an action. Use **one primary** (\`default\`) button per view, for the main action.
Everything else is \`secondary\` or \`ghost\`.

| Variant | Use for |
|---|---|
| \`default\` | The single most important action (Submit, Create) |
| \`secondary\` | Supporting actions next to a primary one, pills like "Play" |
| \`ghost\` | Low-emphasis actions in headers and toolbars ("Share", nav links) |
| \`outline\` | Actions on busy backgrounds where a fill would compete |
| \`destructive\` | Deleting or irreversible actions. Always confirm first. |
| \`link\` | Inline navigation inside text |

**Don't** use a button for navigation to another page (use a link), and don't put two \`default\` buttons side by side.`,
				},
			},
		},
	});
</script>

{#snippet template(args)}
	<Button {...args}>Button</Button>
{/snippet}

<Story name="Default" {template} />
<Story name="Secondary" args={{ variant: 'secondary' }} {template} />
<Story name="Ghost" args={{ variant: 'ghost' }} {template} />
<Story name="Outline" args={{ variant: 'outline' }} {template} />
<Story name="Destructive" args={{ variant: 'destructive' }} {template} />
<Story name="Disabled" args={{ disabled: true }} {template} />

<Story name="With icon" args={{ variant: 'ghost' }}>
	{#snippet template(args)}
		<Button {...args}><Share data-icon="inline-start" />Share</Button>
	{/snippet}
</Story>

<Story name="Icon only" args={{ variant: 'secondary', size: 'icon' }}>
	{#snippet template(args)}
		<Button {...args} aria-label="Send"><ArrowUp /></Button>
	{/snippet}
</Story>

<Story name="Pill" args={{ variant: 'secondary', size: 'sm' }}>
	{#snippet template(args)}
		<Button {...args} class="rounded-full px-4">Play</Button>
	{/snippet}
</Story>
