// url=https://www.figma.com/design/m2eh3Isz82XMQFQ38dLptm/design-system-test?node-id=26-122
// source=packages/design-system/src/lib/components/ui/button/button.svelte
// component=Button
import figma from 'figma';
const instance = figma.selectedInstance;

const label = instance.getString('Label');
const variant = instance.getEnum('Variant', {
	Default: 'default',
	Secondary: 'secondary',
	Outline: 'outline',
	Ghost: 'ghost',
	Destructive: 'destructive'
});
const size = instance.getEnum('Size', {
	Default: 'default',
	Small: 'sm'
});
const disabled = instance.getEnum('State', { Default: false, Disabled: true });
const showIcon = instance.getBoolean('Show icon');
const icon = showIcon ? instance.getInstanceSwap('Icon') : null;
let iconCode;
if (icon && icon.type === 'INSTANCE') {
	iconCode = icon.executeTemplate().example;
}

export default {
	example: figma.code`<Button${variant !== 'default' ? figma.code` variant="${variant}"` : ''}${size !== 'default' ? figma.code` size="${size}"` : ''}${disabled ? ' disabled' : ''}>${iconCode ?? ''}${label}</Button>`,
	imports: ["import { Button } from '@latitudelabs/design-system'"],
	id: 'button',
	metadata: { nestable: true }
};
