<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import { fn } from 'storybook/test';
	import { Steps } from '@latitudelabs/design-system';

	const steps = [
		{ title: 'What’s your name?', description: 'Open Question' },
		{ title: 'How old are you?', description: 'Multiple choice' },
		{ title: 'Now, you’ll watch a new trailer of a Spider man...', description: 'Information' },
		{ title: 'Spider man trailer 2026', description: 'Video' },
		{ title: 'How did you like this trailer?', description: 'Open Question' },
	];

	const { Story } = defineMeta({
		title: 'Components/Steps',
		component: Steps,
		tags: ['autodocs'],
		args: { steps, current: 0 },
		parameters: {
			docs: {
				description: {
					component: `An ordered list of steps with the current one highlighted. Pass \`onselect\` to make steps clickable
(they become buttons with \`aria-current="step"\` on the active one).`,
				},
			},
		},
	});
</script>

{#snippet template(args)}
	<div class="w-[246px] rounded-xl bg-card py-2 shadow-hairline"><Steps {...args} /></div>
{/snippet}

<Story name="Default" {template} />
<Story name="Interactive" args={{ onselect: fn() }} {template} />
<Story name="Third step" args={{ current: 2 }} {template} />
