// url=https://www.figma.com/design/m2eh3Isz82XMQFQ38dLptm/design-system-test?node-id=144-417
// source=packages/design-system/src/lib/components/orb/orb.svelte
// component=Orb
import figma from 'figma';
const instance = figma.selectedInstance;

const variant = instance.getEnum('Variant', {
	'Breathe swirl': 'breathe-swirl',
	'Eye spiral': 'eye-spiral'
});

export default {
	example: figma.code`<Orb size={40}${variant === 'eye-spiral' ? ' variant="eye-spiral"' : ''} state={thinking ? 'thinking' : 'idle'} pulse={reply} label="Assistant name" />`,
	imports: ["import { Orb } from '@latitudelabs/design-system'"],
	id: 'orb',
	metadata: { nestable: true }
};
