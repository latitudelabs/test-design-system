// url=https://www.figma.com/design/m2eh3Isz82XMQFQ38dLptm/design-system-test?node-id=164-34
// source=packages/design-system/src/lib/components/sentiment-bar/sentiment-bar.svelte
// component=SentimentBar
import figma from 'figma';
const instance = figma.selectedInstance;

const legend = instance.getEnum('Legend', { On: '', Off: ' legend={false}' });

export default {
	// Counts come from data; the Figma segments are only sized to match.
	example: figma.code`<SentimentBar positive={positive} neutral={neutral} negative={negative}${legend} />`,
	imports: ["import { SentimentBar } from '@latitudelabs/design-system'"],
	id: 'sentiment-bar',
	metadata: { nestable: true }
};
