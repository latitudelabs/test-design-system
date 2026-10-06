// url=https://www.figma.com/design/m2eh3Isz82XMQFQ38dLptm/codeconnect-playground?node-id=1-33
// source=src/lib/components/Button.svelte
// component=Button
import figma from 'figma'
const instance = figma.selectedInstance

const label = instance.getString('Label')
const variant = instance.getEnum('Variant', {
  'Primary': 'primary',
  'Secondary': 'secondary',
})
const size = instance.getEnum('Size', {
  'md': 'md',
  'sm': 'sm',
})
const disabled = instance.getEnum('Disabled', {
  'true': true,
  'false': false,
})

export default {
  example: figma.code`<Button variant="${variant}" size="${size}" label="${label}"${disabled ? ' disabled' : ''} />`,
  imports: ["import Button from '$lib/components/Button.svelte'"],
  id: 'button',
  metadata: { nestable: true },
}
