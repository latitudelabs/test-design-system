// url=https://www.figma.com/design/m2eh3Isz82XMQFQ38dLptm/design-system-test?node-id=26-389
// source=packages/design-system/src/lib/components/chat-message/chat-message.svelte
// component=ChatMessage
import figma from 'figma';
const instance = figma.selectedInstance;

const message = instance.getString('Message');
const from = instance.getEnum('From', { Assistant: 'assistant', User: 'user' });

export default {
	example: figma.code`<ChatMessage${from === 'user' ? ' from="user"' : ''}>${message}</ChatMessage>`,
	imports: ["import { ChatMessage } from '@latitudelabs/design-system'"],
	id: 'chat-message',
	metadata: { nestable: true }
};
