// url=https://www.figma.com/design/m2eh3Isz82XMQFQ38dLptm/design-system-test?node-id=145-21
// source=packages/design-system/src/lib/components/ui/table/table.svelte
// component=Table
import figma from 'figma';

export default {
	example: figma.code`<Table.Root>
  <Table.Header>
    <Table.Row>
      <Table.Head>Video</Table.Head>
      <Table.Head numeric>Length (s)</Table.Head>
    </Table.Row>
  </Table.Header>
  <Table.Body>
    {#each rows as row (row.id)}
      <Table.Row>
        <Table.Cell rowHeader>{row.name}</Table.Cell>
        <Table.Cell numeric>{row.length}</Table.Cell>
      </Table.Row>
    {/each}
  </Table.Body>
</Table.Root>`,
	imports: ["import { Table } from '@latitudelabs/design-system'"],
	id: 'table',
	metadata: { nestable: true }
};
