<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import { Label, Slider } from '@latitudelabs/design-system';

	const { Story } = defineMeta({
		title: 'Components/Slider',
		component: Slider,
		tags: ['autodocs'],
		argTypes: {
			size: { control: 'select', options: ['default', 'sm'] },
			orientation: { control: 'select', options: ['horizontal', 'vertical'] }
		},
		args: { type: 'single', value: 40, min: 0, max: 100, step: 1, disabled: false, size: 'default' },
		parameters: {
			docs: {
				description: {
					component: `Picks a value (or a range, with \`type="multiple"\`) by dragging along a track: volume, temperature,
opacity, price range. Use it when the **approximate position matters more than the exact number** and the range is
bounded. Always pair it with a visible \`Label\` and show the current value next to it when the number matters.

Use an \`Input\` with \`type="number"\` instead when users need to type a precise value, or the range is very large or
unbounded. Use a **progress bar** (not this) to show read-only completion: a Slider is always interactive.

Anatomy (square, flat): a \`border\`-colored track, a \`control\` progress fill up to the thumb, and a rectangular
\`primary\` thumb four times the track height, centered on it. The thumb never overhangs the track ends. Keyboard: arrow keys step,
Page Up/Down jump, Home/End go to min/max.`
				}
			}
		}
	});
</script>

<script lang="ts">
	let temperature = $state(0.7);
</script>

{#snippet template(args)}
	<div class="flex w-[320px] flex-col gap-3">
		<Label id="volume-label">Volume</Label>
		<Slider aria-labelledby="volume-label" {...args} />
	</div>
{/snippet}

<Story name="Default" {template} />
<Story name="Small" args={{ size: 'sm' }} {template} />
<Story name="Range" args={{ type: 'multiple', value: [20, 70] }} {template} />
<Story name="Stepped" args={{ step: 10, value: 50 }} {template} />
<Story name="Disabled" args={{ disabled: true }} {template} />

<Story name="Vertical" args={{ orientation: 'vertical', value: 60 }}>
	{#snippet template(args)}
		<div class="flex h-48 items-center gap-3">
			<Slider aria-label="Volume" {...args} />
		</div>
	{/snippet}
</Story>

<Story name="With value">
	{#snippet template()}
		<div class="flex w-[430px] flex-col gap-3 rounded-xl bg-card p-4 shadow-hairline">
			<div class="flex items-center justify-between">
				<Label id="temp-label">Temperature</Label>
				<span class="text-body text-muted-foreground tabular-nums">{temperature.toFixed(1)}</span>
			</div>
			<Slider type="single" aria-labelledby="temp-label" bind:value={temperature} min={0} max={2} step={0.1} />
		</div>
	{/snippet}
</Story>
