// url=https://www.figma.com/design/m2eh3Isz82XMQFQ38dLptm/design-system-test?node-id=165-37
// source=packages/design-system/src/lib/components/ui/card/card-section.svelte
// component=Card.Section
import figma from 'figma';
const instance = figma.selectedInstance;

const collapsed = instance.getEnum('Open', { true: '', false: ' collapsed' });

export default {
	// The Figma label is "Title · count"; in code they're separate props.
	example: figma.code`<Card.Section title="Scenes" count={scenes.length}${collapsed}>
	{#each scenes as scene (scene.id)}
		<li class="w-36">…</li>
	{/each}
</Card.Section>`,
	imports: ["import { Card } from '@latitudelabs/design-system'"],
	id: 'card-section',
	metadata: { nestable: true }
};
