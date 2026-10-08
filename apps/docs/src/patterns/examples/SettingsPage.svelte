<script lang="ts">
	import { Breadcrumb, Button, Card, Dialog, Input, Label, Switch, Textarea, buttonVariants } from '@latitudelabs/design-system';
	import { CircleCheck, Icon, Trash } from '@latitudelabs/design-system/icons';

	let name = $state('Spider-Man trailer test');
	let description = $state('Which characters do viewers remember after the 2026 trailer?');
	let nameError = $state('');
	let saved = $state(false);

	let emailDigest = $state(true);
	let responseAlerts = $state(false);

	let deleteOpen = $state(false);
	let deleted = $state(false);

	function save(event: SubmitEvent) {
		event.preventDefault();
		nameError = name.trim() ? '' : 'Enter a project name.';
		saved = !nameError;
	}
</script>

<div class="min-h-[900px] bg-background px-8 py-8">
	<header class="flex items-center justify-between">
		<Breadcrumb.Root>
			<Breadcrumb.List>
				<Breadcrumb.Item><Breadcrumb.Link href="#projects">Projects</Breadcrumb.Link></Breadcrumb.Item>
				<Breadcrumb.Separator>/</Breadcrumb.Separator>
				<Breadcrumb.Item><Breadcrumb.Link href="#project">{name || 'Untitled'}</Breadcrumb.Link></Breadcrumb.Item>
				<Breadcrumb.Separator>/</Breadcrumb.Separator>
				<Breadcrumb.Item><Breadcrumb.Page>Settings</Breadcrumb.Page></Breadcrumb.Item>
			</Breadcrumb.List>
		</Breadcrumb.Root>
	</header>

	<main class="mx-auto mt-12 flex max-w-[640px] flex-col gap-4">
		<h1 class="text-heading">Project settings</h1>

		{#if deleted}
			<Card.Root>
				<Card.Header>
					<Card.Title>Project deleted</Card.Title>
					<Card.Description>“{name}” and its responses were removed.</Card.Description>
				</Card.Header>
				<Card.Content><Button variant="secondary" href="#projects">Back to projects</Button></Card.Content>
			</Card.Root>
		{:else}
			<Card.Root>
				<Card.Header>
					<Card.Title>General</Card.Title>
					<Card.Description>Shown to viewers on the invite page.</Card.Description>
				</Card.Header>
				<Card.Content>
					<form class="flex flex-col gap-4" onsubmit={save} novalidate>
						<div class="flex flex-col gap-2">
							<Label for="project-name">Project name</Label>
							<Input
								id="project-name"
								bind:value={name}
								oninput={() => ((nameError = ''), (saved = false))}
								aria-invalid={nameError ? 'true' : undefined}
								aria-describedby={nameError ? 'project-name-error' : undefined}
							/>
							{#if nameError}
								<p id="project-name-error" class="text-caption text-destructive">{nameError}</p>
							{/if}
						</div>
						<div class="flex flex-col gap-2">
							<Label for="project-description">Description</Label>
							<Textarea id="project-description" bind:value={description} oninput={() => (saved = false)} />
						</div>
						<div class="flex items-center justify-end gap-3">
							{#if saved}
								<span class="text-caption text-muted-foreground flex items-center gap-1" role="status">
									<Icon icon={CircleCheck} size="sm" />Changes saved
								</span>
							{/if}
							<Button type="submit">Save changes</Button>
						</div>
					</form>
				</Card.Content>
			</Card.Root>

			<Card.Root>
				<Card.Header>
					<Card.Title>Notifications</Card.Title>
					<Card.Description>These apply right away.</Card.Description>
				</Card.Header>
				<Card.Content class="flex flex-col gap-4">
					<div class="flex items-center justify-between gap-4">
						<div class="flex flex-col gap-1">
							<Label for="digest">Daily email digest</Label>
							<span class="text-caption text-muted-foreground">A summary of new responses, once a day.</span>
						</div>
						<Switch id="digest" bind:checked={emailDigest} />
					</div>
					<div class="flex items-center justify-between gap-4">
						<div class="flex flex-col gap-1">
							<Label for="alerts">Insights ready</Label>
							<span class="text-caption text-muted-foreground">Email me when 10 people have responded.</span>
						</div>
						<Switch id="alerts" bind:checked={responseAlerts} />
					</div>
				</Card.Content>
			</Card.Root>

			<Card.Root>
				<Card.Header>
					<Card.Title>Danger zone</Card.Title>
					<Card.Description>Deleting removes the project, its questions and all responses.</Card.Description>
					<Card.Action>
						<Dialog.Root bind:open={deleteOpen}>
							<Dialog.Trigger class={buttonVariants({ variant: 'destructive', size: 'sm' })}>
								<Trash data-icon="inline-start" />Delete project
							</Dialog.Trigger>
							<Dialog.Content>
								<Dialog.Header>
									<Dialog.Title>Delete “{name || 'Untitled'}”?</Dialog.Title>
									<Dialog.Description>
										This permanently deletes the project, its questions and all responses. This can’t be undone.
									</Dialog.Description>
								</Dialog.Header>
								<Dialog.Footer>
									<Dialog.Close class={buttonVariants({ variant: 'secondary' })}>Cancel</Dialog.Close>
									<Button variant="destructive" onclick={() => ((deleted = true), (deleteOpen = false))}>Delete project</Button>
								</Dialog.Footer>
							</Dialog.Content>
						</Dialog.Root>
					</Card.Action>
				</Card.Header>
			</Card.Root>
		{/if}
	</main>
</div>
