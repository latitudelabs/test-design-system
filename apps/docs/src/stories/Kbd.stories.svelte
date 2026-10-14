<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import { Kbd } from '@latitudelabs/design-system';

	const { Story } = defineMeta({
		title: 'Components/Kbd',
		component: Kbd,
		tags: ['autodocs'],
		parameters: {
			docs: {
				description: {
					component: `A key hint: a small outlined box around a key or a number, e.g. the number before each
\`ChoiceList\` option. Hide it from screen readers (\`aria-hidden\`) when it only repeats a visible label.`,
				},
			},
		},
	});
</script>

<Story name="Number"><Kbd>1</Kbd></Story>
<Story name="Key"><Kbd>Esc</Kbd></Story>
