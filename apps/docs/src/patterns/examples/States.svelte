<script lang="ts">
	import { Button, Card } from '@latitudelabs/design-system';
	import { ChartColumn, CircleAlert, Icon, LoaderCircle, RefreshCw, Share } from '@latitudelabs/design-system/icons';
</script>

<div class="grid w-[960px] grid-cols-3 gap-4">
	<Card.Root>
		<Card.Header>
			<Card.Title>Empty</Card.Title>
			<Card.Description>Nothing to show yet</Card.Description>
		</Card.Header>
		<Card.Content>
			<div class="flex flex-col items-center gap-3 rounded-sm bg-background px-6 py-10 text-center">
				<Icon icon={ChartColumn} size="lg" class="text-muted-foreground" />
				<p class="text-title">No insights yet</p>
				<p class="text-caption text-muted-foreground">Insights are ready when at least 10 people respond.</p>
				<Button variant="secondary" size="sm"><Share data-icon="inline-start" />Share with viewers</Button>
			</div>
		</Card.Content>
	</Card.Root>

	<Card.Root>
		<Card.Header>
			<Card.Title>Loading</Card.Title>
			<Card.Description>Waiting for data</Card.Description>
		</Card.Header>
		<Card.Content>
			<div class="flex flex-col items-center gap-3 rounded-sm bg-background px-6 py-10 text-center" aria-busy="true">
				<Icon icon={LoaderCircle} size="lg" class="animate-spin text-muted-foreground" label="Loading" />
				<p class="text-title">Analysing 24 responses…</p>
				<p class="text-caption text-muted-foreground">This usually takes under a minute.</p>
			</div>
		</Card.Content>
	</Card.Root>

	<Card.Root>
		<Card.Header>
			<Card.Title>Error</Card.Title>
			<Card.Description>Something went wrong</Card.Description>
		</Card.Header>
		<Card.Content class="flex flex-col gap-3">
			<div role="alert" class="flex items-start gap-2 rounded-sm bg-destructive/10 p-3">
				<Icon icon={CircleAlert} size="sm" class="mt-0.5 shrink-0 text-destructive" />
				<div class="flex flex-col gap-1">
					<p class="text-body font-medium text-destructive">We couldn’t load insights</p>
					<p class="text-caption text-destructive">The connection timed out. Your responses are safe.</p>
				</div>
			</div>
			<Button variant="secondary" size="sm" class="self-start"><RefreshCw data-icon="inline-start" />Try again</Button>
		</Card.Content>
	</Card.Root>
</div>
