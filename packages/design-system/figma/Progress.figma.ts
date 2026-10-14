// url=https://www.figma.com/design/m2eh3Isz82XMQFQ38dLptm/design-system-test?node-id=145-431
// source=packages/design-system/src/lib/components/ui/progress/progress.svelte
// component=Progress
import figma from 'figma';
const instance = figma.selectedInstance;

const value = instance.getEnum('Value', {
	'0': '0',
	'25': '25',
	'50': '50',
	'75': '75',
	'100': '100'
});

export default {
	example: figma.code`<Progress value={${value}} aria-label="Upload progress" />`,
	imports: ["import { Progress } from '@latitudelabs/design-system'"],
	id: 'progress',
	metadata: { nestable: true }
};
