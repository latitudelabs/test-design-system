// url=https://www.figma.com/design/m2eh3Isz82XMQFQ38dLptm/design-system-test?node-id=145-450
// source=packages/design-system/src/lib/components/segmented-control/segmented-control.svelte
// component=SegmentedControl
import figma from 'figma';

export default {
	example: figma.code`<Label id="theme-label">Theme</Label>
<SegmentedControl
  aria-labelledby="theme-label"
  bind:value={theme}
  options={[
    { value: 'light', label: 'Light' },
    { value: 'dark', label: 'Dark' },
    { value: 'system', label: 'System' }
  ]}
/>`,
	imports: ["import { Label, SegmentedControl } from '@latitudelabs/design-system'"],
	id: 'segmented-control',
	metadata: { nestable: true }
};
