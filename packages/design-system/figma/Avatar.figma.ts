// url=https://www.figma.com/design/m2eh3Isz82XMQFQ38dLptm/design-system-test?node-id=26-379
// source=packages/design-system/src/lib/components/ui/avatar/avatar.svelte
// component=Avatar
import figma from 'figma';
const instance = figma.selectedInstance;

const type = instance.getEnum('Type', { AI: 'ai', Initials: 'initials' });
const initials = instance.getString('Initials');

export default {
	example:
		type === 'ai'
			? figma.code`<Avatar.Root class="size-10" aria-label="AI assistant">
  <Avatar.Fallback class="bg-brand blur-[1.5px]"><span class="sr-only">AI</span></Avatar.Fallback>
</Avatar.Root>`
			: figma.code`<Avatar.Root>
  <Avatar.Image src={user.avatarUrl} alt={user.name} />
  <Avatar.Fallback>${initials}</Avatar.Fallback>
</Avatar.Root>`,
	imports: ["import { Avatar } from '@latitudelabs/design-system'"],
	id: 'avatar',
	metadata: { nestable: true }
};
