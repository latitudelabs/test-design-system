// url=https://www.figma.com/design/m2eh3Isz82XMQFQ38dLptm/design-system-test?node-id=36-63
// source=packages/design-system/src/lib/components/ui/dialog/dialog.svelte
// component=Dialog
import figma from 'figma';
const instance = figma.selectedInstance;

const title = instance.getString('Title');
const description = instance.getString('Description');
const destructive = instance.getEnum('Type', { Default: false, Destructive: true });
const showCancel = instance.getBoolean('Show cancel');
const action = instance.findInstance('Action');
let actionCode;
if (action && action.type === 'INSTANCE') {
	actionCode = action.executeTemplate().example;
}

export default {
	example: figma.code`<Dialog.Root>
  <Dialog.Trigger class={buttonVariants({ variant: '${destructive ? 'destructive' : 'secondary'}' })}>Open</Dialog.Trigger>
  <Dialog.Content>
    <Dialog.Header>
      <Dialog.Title>${title}</Dialog.Title>
      <Dialog.Description>${description}</Dialog.Description>
    </Dialog.Header>
    <Dialog.Footer>${
			showCancel
				? figma.code`
      <Dialog.Close class={buttonVariants({ variant: 'secondary' })}>Cancel</Dialog.Close>`
				: ''
		}
      ${actionCode}
    </Dialog.Footer>
  </Dialog.Content>
</Dialog.Root>`,
	imports: ["import { Button, Dialog, buttonVariants } from '@latitudelabs/design-system'"],
	id: 'dialog',
	metadata: { nestable: false }
};
