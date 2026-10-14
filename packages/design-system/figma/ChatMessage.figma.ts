// url=https://www.figma.com/design/m2eh3Isz82XMQFQ38dLptm/design-system-test?node-id=26-389
// source=packages/design-system/src/lib/components/chat-message/chat-message.svelte
// component=ChatMessage
import figma from 'figma';
const instance = figma.selectedInstance;

const message = instance.getString('Message');
const from = instance.getEnum('From', { Assistant: 'assistant', User: 'user' });
// The default AI avatar is ChatMessage's own; any other swapped-in avatar (an Orb) becomes the avatar snippet.
const avatar = from === 'assistant' ? instance.getInstanceSwap('Avatar') : null;
let avatarCode;
if (avatar && avatar.type === 'INSTANCE' && avatar.codeConnectId() === 'orb') {
	avatarCode = avatar.executeTemplate().example;
}

export default {
	example: avatarCode
		? figma.code`<ChatMessage>
  {#snippet avatar()}${avatarCode}{/snippet}
  ${message}
</ChatMessage>`
		: figma.code`<ChatMessage${from === 'user' ? ' from="user"' : ''}>${message}</ChatMessage>`,
	imports: ["import { ChatMessage } from '@latitudelabs/design-system'"],
	id: 'chat-message',
	metadata: { nestable: true }
};
