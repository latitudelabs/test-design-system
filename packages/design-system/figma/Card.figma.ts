// url=https://www.figma.com/design/m2eh3Isz82XMQFQ38dLptm/codeconnect-playground?node-id=26-327
// source=packages/design-system/src/lib/components/ui/card/card.svelte
// component=Card
import figma from 'figma';
const instance = figma.selectedInstance;

const title = instance.getString('Title');
const description = instance.getBoolean('Show description')
	? instance.getString('Description')
	: null;
const size = instance.getEnum('Size', { Default: 'default', Small: 'sm' });
const action = instance.getBoolean('Show action') ? instance.findInstance('Action') : null;
let actionCode;
if (action && action.type === 'INSTANCE') {
	actionCode = action.executeTemplate().example;
}
const content = instance.getBoolean('Show content') ? instance.getInstanceSwap('Content') : null;
let contentCode;
if (content && content.type === 'INSTANCE') {
	contentCode = content.executeTemplate().example;
}

export default {
	example: figma.code`<Card.Root${size === 'sm' ? ' size="sm"' : ''}>
  <Card.Header>
    <Card.Title>${title}</Card.Title>${
			description
				? figma.code`
    <Card.Description>${description}</Card.Description>`
				: ''
		}${
			actionCode
				? figma.code`
    <Card.Action>${actionCode}</Card.Action>`
				: ''
		}
  </Card.Header>${
		contentCode
			? figma.code`
  <Card.Content>${contentCode}</Card.Content>`
			: ''
	}
</Card.Root>`,
	imports: ["import { Card } from '@latitudelabs/design-system'"],
	id: 'card',
	metadata: { nestable: true }
};
