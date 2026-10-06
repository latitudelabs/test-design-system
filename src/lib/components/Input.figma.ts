// url=https://www.figma.com/design/m2eh3Isz82XMQFQ38dLptm/codeconnect-playground?node-id=2-7
// source=src/lib/components/Input.svelte
// component=Input
import figma from 'figma'
const instance = figma.selectedInstance

// The Figma component has no properties yet, so read the placeholder from its text layer.
const placeholderLayer = instance.findText('What are we analysing today..?')
const placeholder = placeholderLayer && placeholderLayer.type === 'TEXT' ? placeholderLayer.textContent : ''

export default {
  example: figma.code`<Input placeholder="${placeholder}" onsubmit={(value) => {}} />`,
  imports: ["import Input from '$lib/components/Input.svelte'"],
  id: 'input',
  metadata: { nestable: true },
}
