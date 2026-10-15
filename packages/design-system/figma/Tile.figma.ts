// url=https://www.figma.com/design/m2eh3Isz82XMQFQ38dLptm/design-system-test?node-id=164-57
// source=packages/design-system/src/lib/components/tile/tile.svelte
// component=Tile
import figma from 'figma';
const instance = figma.selectedInstance;

const title = instance.getString('Title');
const description = instance.getString('Description');
const onclick = instance.getEnum('Type', { Plain: '', Button: ' onclick={select}' });

export default {
	example: figma.code`<Tile${onclick}>
	<span class="text-caption">${title}</span>
	<span class="text-caption text-muted-foreground">${description}</span>
</Tile>`,
	imports: ["import { Tile } from '@latitudelabs/design-system'"],
	id: 'tile',
	metadata: { nestable: true }
};
