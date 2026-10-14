// url=https://www.figma.com/design/m2eh3Isz82XMQFQ38dLptm/design-system-test?node-id=148-16
// source=packages/design-system/src/lib/components/nav-item/nav-item.svelte
// component=NavItem
import figma from 'figma';
const instance = figma.selectedInstance;

const label = instance.getString('Label');
const current = instance.getEnum('State', { Default: false, Current: true });

export default {
	example: figma.code`<NavItem href="/"${current ? ' current' : ''}>${label}</NavItem>`,
	imports: ["import { NavItem } from '@latitudelabs/design-system'"],
	id: 'nav-item',
	metadata: { nestable: true }
};
