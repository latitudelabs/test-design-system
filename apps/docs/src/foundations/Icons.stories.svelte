<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import IconGallery from './IconGallery.svelte';

	const { Story } = defineMeta({
		title: 'Foundations/Icons',
		tags: ['autodocs'],
		parameters: {
			layout: 'padded',
			docs: {
				description: {
					component: `A curated set of [Lucide](https://lucide.dev) icons. Using one shared set keeps the same action
looking the same in every product ("delete" is always the trash can).

\`\`\`svelte
<script>
  import { CircleAlert, Icon, Search } from '@latitudelabs/design-system/icons';
<\/script>

<Icon icon={Search} />                       <!-- decorative, 20px -->
<Icon icon={Search} size="sm" />             <!-- 16px, inside buttons and inputs -->
<Icon icon={CircleAlert} label="Error" />   <!-- meaningful on its own: give it a label -->
\`\`\`

Icons inherit the text color, so color them with text roles (\`class="text-muted-foreground"\`). Inside \`Button\`,
pass the icon component directly with \`data-icon="inline-start"\`. The button sizes it.

**Need an icon that isn't here?** Ask for it to be added rather than importing from Lucide directly, so the set stays shared.`,
				},
			},
		},
	});
</script>

<Story name="Gallery">
	<IconGallery />
</Story>
