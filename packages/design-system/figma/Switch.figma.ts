// url=https://www.figma.com/design/m2eh3Isz82XMQFQ38dLptm/design-system-test?node-id=32-247
// source=packages/design-system/src/lib/components/ui/switch/switch.svelte
// component=Switch
import figma from 'figma';
const instance = figma.selectedInstance;

const checked = instance.getEnum('Checked', { true: true, false: false });
const size = instance.getEnum('Size', { Default: 'default', Small: 'sm' });
const disabled = instance.getEnum('State', { Default: false, Disabled: true });

export default {
	example: figma.code`<Switch id="setting"${checked ? ' checked' : ''}${size === 'sm' ? ' size="sm"' : ''}${disabled ? ' disabled' : ''} />
<Label for="setting">Setting name</Label>`,
	imports: ["import { Label, Switch } from '@latitudelabs/design-system'"],
	id: 'switch',
	metadata: { nestable: true }
};
