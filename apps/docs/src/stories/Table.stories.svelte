<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import { Table } from '@latitudelabs/design-system';

	const { Story } = defineMeta({
		title: 'Components/Table',
		tags: ['autodocs'],
		parameters: {
			docs: {
				description: {
					component: `Numbers or short facts across a few dimensions. \`Table.Root\` › \`Table.Header\` / \`Table.Body\`
› \`Table.Row\` › \`Table.Head\` (column headings) and \`Table.Cell\`.

Mark the cell that names each row with \`rowHeader\`, and number columns with \`numeric\` (on the heading too) so
they right-align with tabular figures. The table scrolls sideways on its own when it doesn't fit.`,
				},
			},
		},
	});

	const rows = [
		['Women Talking trailer', 102, 7, 12],
		['Inside Out 2 clip', 14, 5, 2]
	] as const;
</script>

<Story name="Default">
	<div class="w-[560px] rounded-xl bg-card p-6 shadow-hairline">
		<Table.Root>
			<Table.Header>
				<Table.Row>
					<Table.Head>Video</Table.Head>
					<Table.Head numeric>Length (s)</Table.Head>
					<Table.Head numeric>Characters</Table.Head>
					<Table.Head numeric>Scenes</Table.Head>
				</Table.Row>
			</Table.Header>
			<Table.Body>
				{#each rows as [name, ...cells] (name)}
					<Table.Row>
						<Table.Cell rowHeader>{name}</Table.Cell>
						{#each cells as cell, i (i)}<Table.Cell numeric>{cell}</Table.Cell>{/each}
					</Table.Row>
				{/each}
			</Table.Body>
		</Table.Root>
	</div>
</Story>
