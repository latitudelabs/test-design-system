// url=https://www.figma.com/design/m2eh3Isz82XMQFQ38dLptm/design-system-test?node-id=144-325
// source=packages/design-system/src/lib/components/choice-list/choice-list.svelte
// component=ChoiceList
import figma from 'figma';

export default {
	example: figma.code`<ChoiceList options={choices} onselect={(option) => send(option)} />`,
	imports: ["import { ChoiceList } from '@latitudelabs/design-system'"],
	id: 'choice-list',
	metadata: { nestable: true }
};
