# Patterns

Proven compositions. Adapt sizes and content; keep the structure and tokens.

## Page shell

Header with breadcrumb on the left and quiet navigation on the right; content centered below.

```svelte
<div class="min-h-screen px-8 py-8">
	<header class="flex items-center justify-between">
		<Breadcrumb.Root>…</Breadcrumb.Root>
		<nav class="flex gap-1">
			<Button variant="ghost" href="/assets" class="text-title text-muted-foreground">Assets</Button>
			<Button variant="ghost" href="/settings" class="text-title text-muted-foreground">Settings</Button>
		</nav>
	</header>
	<main class="mx-auto mt-16 flex max-w-[970px] flex-col items-center gap-4">…</main>
</div>
```

The page is `bg-background` (set globally). Content lives on cards.

## Primary card with side list

Steps on the left, the active step's content in an inner panel on the right.

```svelte
<Card.Root class="w-full">
	<Card.Header>
		<Card.Title>What characters do people like the most?</Card.Title>
		<Card.Description>Viewer experience</Card.Description>
		<Card.Action>
			<Button variant="ghost" size="sm"><Share data-icon="inline-start" />Share</Button>
		</Card.Action>
	</Card.Header>
	<Card.Content class="flex-row gap-0">
		<Steps class="w-[246px] shrink-0" {steps} bind:current onselect={goTo} />
		<div class="flex min-h-[450px] flex-1 items-center justify-center rounded-sm bg-background">
			<div class="flex w-[430px] flex-col gap-4">
				<h2 class="text-heading">{steps[current].title}</h2>
				<PromptInput placeholder="My name is..." onsubmit={answer} />
			</div>
		</div>
	</Card.Content>
</Card.Root>
```

## Floating AI panel

The assistant talks in a raised panel; the brand gradient appears only in its avatar.

```svelte
<div class="flex w-[446px] flex-col gap-5 rounded-xl bg-card p-2 shadow-raised">
	{#each messages as m, i (i)}
		<ChatMessage from={m.from}>{m.text}</ChatMessage>
	{/each}
	<PromptInput bind:value={draft} placeholder="Reply…" onsubmit={send} />
</div>
```

## Connected cards

A short vertical `Separator` joins cards that form a flow (e.g. experience → insights).

```svelte
<Separator orientation="vertical" class="h-4! w-[3px]! self-center! rounded-full" />
```

## Form

Labels above fields, 8px between label and field, 16px between fields, one primary button.

```svelte
<form class="flex w-[430px] flex-col gap-4" onsubmit={save}>
	<div class="flex flex-col gap-2">
		<Label for="name">Project name</Label>
		<Input id="name" bind:value={name} required />
	</div>
	<div class="flex flex-col gap-2">
		<Label for="goal">Goal</Label>
		<Textarea id="goal" bind:value={goal} />
	</div>
	<div class="flex justify-end gap-2">
		<Button variant="secondary" type="button" onclick={cancel}>Cancel</Button>
		<Button type="submit">Create project</Button>
	</div>
</form>
```

There's no Switch or Checkbox component yet. For an on/off choice, use two `secondary`/`default` buttons as a
segmented choice with `aria-pressed`, or a native `<input type="checkbox">` styled with `accent-primary size-4`,
and mention to the user that a Switch is a design-system candidate.

## Empty state

Explain what will appear and offer the next action. No illustrations needed; an icon is enough.

```svelte
<div class="flex flex-col items-center gap-3 rounded-sm bg-background px-8 py-12 text-center">
	<Icon icon={ChartColumn} size="lg" class="text-muted-foreground" />
	<p class="text-title">No insights yet</p>
	<p class="text-caption text-muted-foreground">Insights are ready when at least 10 people respond.</p>
	<Button variant="secondary" size="sm"><Share data-icon="inline-start" />Share with viewers</Button>
</div>
```

## Error and status messages

```svelte
<div role="alert" class="flex items-start gap-2 rounded-sm bg-destructive/10 p-3">
	<Icon icon={CircleAlert} size="sm" class="mt-0.5 text-destructive" />
	<p class="text-body text-destructive">We couldn’t save your changes. Try again.</p>
</div>
```

For loading, use `<Icon icon={LoaderCircle} class="animate-spin" label="Loading" />`.

## Destructive action

Confirm before deleting; name the thing being deleted.

```svelte
<Button variant="destructive" onclick={() => (confirming = true)}><Trash data-icon="inline-start" />Delete project</Button>
```
