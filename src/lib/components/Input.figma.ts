// url=https://www.figma.com/design/m2eh3Isz82XMQFQ38dLptm/codeconnect-playground?node-id=7-21
// source=src/lib/components/Input.svelte
// component=Input
import figma from 'figma'
const instance = figma.selectedInstance

const placeholder = instance.getString('Placeholder')
const hasError = instance.getEnum('Error', {
  'true': true,
  'false': false,
})
const errorMessage = instance.getString('Error message')

export default {
  example: figma.code`<Input placeholder="${placeholder}"${hasError ? figma.code` error="${errorMessage}"` : ''} onsubmit={(value) => {}} />`,
  imports: ["import Input from '$lib/components/Input.svelte'"],
  id: 'input',
  metadata: { nestable: true },
}
