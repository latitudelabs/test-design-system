// url=https://www.figma.com/design/m2eh3Isz82XMQFQ38dLptm/design-system-test?node-id=26-293
// source=packages/design-system/src/lib/components/prompt-input/prompt-input.svelte
// component=PromptInput
import figma from 'figma';
const instance = figma.selectedInstance;

const text = instance.getString('Text');
const isEmpty = instance.getEnum('Content', { Empty: true, Filled: false });

export default {
	example: figma.code`<PromptInput ${isEmpty ? figma.code`placeholder="${text}"` : figma.code`value="${text}"`} onsubmit={(value) => {}} />`,
	imports: ["import { PromptInput } from '@latitudelabs/design-system'"],
	id: 'prompt-input',
	metadata: { nestable: true }
};
