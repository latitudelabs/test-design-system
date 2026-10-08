// url=https://www.figma.com/design/m2eh3Isz82XMQFQ38dLptm/codeconnect-playground?node-id=26-400
// source=packages/design-system/src/lib/components/ui/breadcrumb/breadcrumb.svelte
// component=Breadcrumb
import figma from 'figma';
const instance = figma.selectedInstance;

const link1 = instance.getString('Link 1');
const link2 = instance.getString('Link 2');
const current = instance.getString('Current');
const threeLevels = instance.getEnum('Levels', { '2': false, '3': true });

export default {
	example: figma.code`<Breadcrumb.Root>
  <Breadcrumb.List>
    <Breadcrumb.Item><Breadcrumb.Link href="#">${link1}</Breadcrumb.Link></Breadcrumb.Item>
    <Breadcrumb.Separator>/</Breadcrumb.Separator>${
			threeLevels
				? figma.code`
    <Breadcrumb.Item><Breadcrumb.Link href="#">${link2}</Breadcrumb.Link></Breadcrumb.Item>
    <Breadcrumb.Separator>/</Breadcrumb.Separator>`
				: ''
		}
    <Breadcrumb.Item><Breadcrumb.Page>${current}</Breadcrumb.Page></Breadcrumb.Item>
  </Breadcrumb.List>
</Breadcrumb.Root>`,
	imports: ["import { Breadcrumb } from '@latitudelabs/design-system'"],
	id: 'breadcrumb',
	metadata: { nestable: true }
};
