// url=https://www.figma.com/design/m2eh3Isz82XMQFQ38dLptm/design-system-test?node-id=26-246
// source=packages/design-system/src/lib/components/ui/badge/badge.svelte
// component=Badge
import figma from 'figma';
const instance = figma.selectedInstance;

const label = instance.getString('Label');
const variant = instance.getEnum('Variant', {
	Default: 'default',
	Secondary: 'secondary',
	Outline: 'outline',
	Destructive: 'destructive'
});

export default {
	example: figma.code`<Badge${variant !== 'default' ? figma.code` variant="${variant}"` : ''}>${label}</Badge>`,
	imports: ["import { Badge } from '@latitudelabs/design-system'"],
	id: 'badge',
	metadata: { nestable: true }
};
