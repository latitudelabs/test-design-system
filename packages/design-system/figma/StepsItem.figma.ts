// url=https://www.figma.com/design/m2eh3Isz82XMQFQ38dLptm/design-system-test?node-id=26-340
// source=packages/design-system/src/lib/components/steps/steps.svelte
// component=Steps
import figma from 'figma';
const instance = figma.selectedInstance;

const title = instance.getString('Title');
const description = instance.getBoolean('Show description')
	? instance.getString('Description')
	: null;

// A single Figma item maps to one entry of the steps array.
export default {
	example: figma.code`{ title: '${title}'${description ? figma.code`, description: '${description}'` : ''} }`,
	imports: ["import { Steps } from '@latitudelabs/design-system'"],
	id: 'steps-item',
	metadata: { nestable: true }
};
