<script lang="ts">
	import { Button, Card, Input, Label, Textarea } from '@latitudelabs/design-system';
	import { CircleAlert, Icon } from '@latitudelabs/design-system/icons';

	let values = $state({ name: '', audience: '', goal: '' });
	let errors = $state<Partial<Record<keyof typeof values, string>>>({});
	let submitted = $state(false);

	function validate() {
		errors = {
			name: values.name.trim() ? undefined : 'Give your project a name.',
			audience: Number(values.audience) >= 10 ? undefined : 'Recruit at least 10 viewers so insights are meaningful.',
		};
		return !errors.name && !errors.audience;
	}

	function submit(event: SubmitEvent) {
		event.preventDefault();
		submitted = validate();
		// Move focus to the first invalid field so keyboard and screen-reader users land on the problem.
		if (!submitted) document.getElementById(errors.name ? 'f-name' : 'f-audience')?.focus();
	}

	const errorCount = $derived(Object.values(errors).filter(Boolean).length);
</script>

<Card.Root class="w-[520px]">
	<Card.Header>
		<Card.Title>New project</Card.Title>
		<Card.Description>Set up what you want to learn. You can change this later.</Card.Description>
	</Card.Header>
	<Card.Content>
		{#if submitted}
			<p class="text-body" role="status">Project “{values.name}” created.</p>
		{:else}
			<form class="flex flex-col gap-4" onsubmit={submit} novalidate>
				{#if errorCount > 0}
					<div role="alert" class="flex items-start gap-2 rounded-sm bg-destructive/10 p-3">
						<Icon icon={CircleAlert} size="sm" class="mt-0.5 text-destructive" />
						<p class="text-body text-destructive">Fix {errorCount} {errorCount === 1 ? 'field' : 'fields'} to continue.</p>
					</div>
				{/if}

				<div class="flex flex-col gap-2">
					<Label for="f-name">Project name</Label>
					<Input
						id="f-name"
						bind:value={values.name}
						placeholder="e.g. Spider-Man trailer test"
						aria-invalid={errors.name ? 'true' : undefined}
						aria-describedby={errors.name ? 'f-name-error' : undefined}
					/>
					{#if errors.name}<p id="f-name-error" class="text-caption text-destructive">{errors.name}</p>{/if}
				</div>

				<div class="flex flex-col gap-2">
					<Label for="f-audience">Number of viewers</Label>
					<Input
						id="f-audience"
						type="number"
						min="10"
						bind:value={values.audience}
						aria-invalid={errors.audience ? 'true' : undefined}
						aria-describedby={errors.audience ? 'f-audience-error' : 'f-audience-hint'}
					/>
					{#if errors.audience}
						<p id="f-audience-error" class="text-caption text-destructive">{errors.audience}</p>
					{:else}
						<p id="f-audience-hint" class="text-caption text-muted-foreground">At least 10. We’ll recruit them for you.</p>
					{/if}
				</div>

				<div class="flex flex-col gap-2">
					<Label for="f-goal">What do you want to learn? <span class="text-muted-foreground">(optional)</span></Label>
					<Textarea id="f-goal" bind:value={values.goal} />
				</div>

				<div class="flex justify-end gap-2">
					<Button variant="secondary" type="button">Cancel</Button>
					<Button type="submit">Create project</Button>
				</div>
			</form>
		{/if}
	</Card.Content>
</Card.Root>
