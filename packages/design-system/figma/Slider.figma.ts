// url=https://www.figma.com/design/m2eh3Isz82XMQFQ38dLptm/design-system-test?node-id=109-43
// source=packages/design-system/src/lib/components/ui/slider/slider.svelte
// component=Slider
import figma from 'figma';
const instance = figma.selectedInstance;

const size = instance.getEnum('Size', { Default: 'default', Small: 'sm' });
const range = instance.getEnum('Range', { true: true, false: false });
const disabled = instance.getEnum('State', { Default: false, Disabled: true });

export default {
	example: figma.code`<Label id="slider-label">Setting name</Label>
<Slider type="${range ? 'multiple' : 'single'}" aria-labelledby="slider-label" bind:value={${range ? 'range' : 'value'}}${size === 'sm' ? ' size="sm"' : ''}${disabled ? ' disabled' : ''} />`,
	imports: ["import { Label, Slider } from '@latitudelabs/design-system'"],
	id: 'slider',
	metadata: { nestable: true }
};
