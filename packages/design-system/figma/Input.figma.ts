// url=https://www.figma.com/design/m2eh3Isz82XMQFQ38dLptm/design-system-test?node-id=26-280
// source=packages/design-system/src/lib/components/ui/input/input.svelte
// component=Input
import figma from 'figma';
const instance = figma.selectedInstance;

const text = instance.getString('Text');
const isPlaceholder = instance.getEnum('Content', { Placeholder: true, Filled: false });
const state = instance.getEnum('State', {
	Default: 'default',
	Focus: 'default',
	Invalid: 'invalid',
	Disabled: 'disabled'
});

export default {
	example: figma.code`<Input ${isPlaceholder ? figma.code`placeholder="${text}"` : figma.code`value="${text}"`}${state === 'invalid' ? ' aria-invalid="true"' : ''}${state === 'disabled' ? ' disabled' : ''} />`,
	imports: ["import { Input } from '@latitudelabs/design-system'"],
	id: 'input',
	metadata: { nestable: true }
};
