<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import { Orb } from '@latitudelabs/design-system';

	const { Story } = defineMeta({
		title: 'Components/Orb',
		component: Orb,
		tags: ['autodocs'],
		argTypes: {
			state: { control: 'select', options: ['idle', 'thinking', 'speaking'] },
			variant: { control: 'select', options: ['breathe-swirl', 'eye-spiral'] }
		},
		args: { size: 80, state: 'idle', variant: 'breathe-swirl' },
		parameters: {
			docs: {
				description: {
					component: `The AI assistant's animated avatar, made of the brand gradient. \`state\` sets the tempo
(thinking is faster, speaking a little livelier); change \`pulse\` (e.g. to the latest reply) to play a one-off pop.

Variants: \`breathe-swirl\` (CSS) and \`eye-spiral\` (WebGL, follows the pointer after an interaction; falls back to
the CSS orb without WebGL). Motion stops with reduced motion. Use it as a \`ChatMessage\` \`avatar\`, and give it the
assistant's name with \`label\`.`,
				},
			},
		},
	});
</script>

<Story name="Breathe swirl" />
<Story name="Eye spiral" args={{ variant: 'eye-spiral' }} />
<Story name="Thinking" args={{ state: 'thinking' }} />
