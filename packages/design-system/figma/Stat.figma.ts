// url=https://www.figma.com/design/m2eh3Isz82XMQFQ38dLptm/design-system-test?node-id=164-6
// source=packages/design-system/src/lib/components/stat/stat.svelte
// component=Stat
import figma from 'figma';
const instance = figma.selectedInstance;

const value = instance.getString('Value');
const label = instance.getString('Label');

export default {
	example: figma.code`<Stat value="${value}" label="${label}" />`,
	imports: ["import { Stat } from '@latitudelabs/design-system'"],
	id: 'stat',
	metadata: { nestable: true }
};
