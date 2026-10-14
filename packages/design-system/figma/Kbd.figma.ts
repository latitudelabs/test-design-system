// url=https://www.figma.com/design/m2eh3Isz82XMQFQ38dLptm/design-system-test?node-id=144-302
// source=packages/design-system/src/lib/components/kbd/kbd.svelte
// component=Kbd
import figma from 'figma';
const instance = figma.selectedInstance;

const key = instance.getString('Key');

export default {
	example: figma.code`<Kbd>${key}</Kbd>`,
	imports: ["import { Kbd } from '@latitudelabs/design-system'"],
	id: 'kbd',
	metadata: { nestable: true }
};
