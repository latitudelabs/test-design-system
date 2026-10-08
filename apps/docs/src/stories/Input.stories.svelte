<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import { Input, Label, Textarea } from '@latitudelabs/design-system';

	const { Story } = defineMeta({
		title: 'Components/Input',
		component: Input,
		tags: ['autodocs'],
		args: { placeholder: 'My name is...', disabled: false },
		parameters: {
			docs: {
				description: {
					component: `A filled text field. **Always pair it with a visible \`Label\`**, since placeholders disappear on typing
and aren't read reliably by screen readers. Mark errors with \`aria-invalid\` and describe them in text below the field.`,
				},
			},
		},
	});
</script>

<Story name="Default">
	{#snippet template(args)}
		<div class="w-[430px]"><Input {...args} /></div>
	{/snippet}
</Story>

<Story name="With label">
	{#snippet template(args)}
		<div class="flex w-[430px] flex-col gap-2">
			<Label for="name">Name</Label>
			<Input id="name" {...args} />
		</div>
	{/snippet}
</Story>

<Story name="Invalid">
	{#snippet template(args)}
		<div class="flex w-[430px] flex-col gap-2">
			<Label for="email">Email</Label>
			<Input id="email" {...args} value="peter@" aria-invalid="true" aria-describedby="email-error" />
			<p id="email-error" class="text-caption text-destructive">Enter a complete email address.</p>
		</div>
	{/snippet}
</Story>

<Story name="Disabled" args={{ disabled: true }}>
	{#snippet template(args)}
		<div class="w-[430px]"><Input {...args} /></div>
	{/snippet}
</Story>

<Story name="Textarea">
	{#snippet template()}
		<div class="w-[430px]"><Textarea placeholder="Describe what you want to learn..." /></div>
	{/snippet}
</Story>
