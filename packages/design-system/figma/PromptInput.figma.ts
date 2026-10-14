// url=https://www.figma.com/design/m2eh3Isz82XMQFQ38dLptm/design-system-test?node-id=26-293
// source=packages/design-system/src/lib/components/prompt-input/prompt-input.svelte
// component=PromptInput
import figma from 'figma';
const instance = figma.selectedInstance;

const text = instance.getString('Text');
const isEmpty = instance.getEnum('Content', { Empty: true, Filled: false });
const leading = instance.getEnum('Leading', { true: true, false: false });
const onFocus = instance.getEnum('Send', { Always: false, 'On focus': true });
const key = leading ? instance.findInstance('Kbd') : null;
let keyCode;
if (key && key.type === 'INSTANCE') {
	keyCode = key.executeTemplate().example;
}

export default {
	example: keyCode
		? figma.code`<PromptInput ${isEmpty ? figma.code`placeholder="${text}"` : figma.code`value="${text}"`}${onFocus ? ' submitOnFocus' : ''} onsubmit={(value) => {}}>
  {#snippet leading()}${keyCode}{/snippet}
</PromptInput>`
		: figma.code`<PromptInput ${isEmpty ? figma.code`placeholder="${text}"` : figma.code`value="${text}"`}${onFocus ? ' submitOnFocus' : ''} onsubmit={(value) => {}} />`,
	imports: ["import { Kbd, PromptInput } from '@latitudelabs/design-system'"],
	id: 'prompt-input',
	metadata: { nestable: true }
};
