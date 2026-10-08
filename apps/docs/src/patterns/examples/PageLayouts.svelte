<script lang="ts">
	import { Breadcrumb, Button } from '@latitudelabs/design-system';
	import { Icon, Moon } from '@latitudelabs/design-system/icons';

	let { width = 'default' }: { width?: 'narrow' | 'default' | 'wide' } = $props();

	const config = {
		narrow: { max: 'max-w-[640px]', label: '640px · forms, settings, reading', crumb: 'Settings' },
		default: { max: 'max-w-[970px]', label: '970px · workspaces, primary cards', crumb: 'New' },
		wide: { max: 'max-w-[1280px]', label: '1280px · dashboards, overviews', crumb: 'Insights' },
	}[width];
</script>

<!-- Region placeholders use the real surfaces and spacing so the frame reads like a product page. -->
<div class="relative min-h-[760px] bg-background px-8 py-8">
	<header class="flex items-center justify-between">
		<Breadcrumb.Root>
			<Breadcrumb.List>
				<Breadcrumb.Item><Breadcrumb.Link href="#projects">Projects</Breadcrumb.Link></Breadcrumb.Item>
				<Breadcrumb.Separator>/</Breadcrumb.Separator>
				<Breadcrumb.Item><Breadcrumb.Page>{config.crumb}</Breadcrumb.Page></Breadcrumb.Item>
			</Breadcrumb.List>
		</Breadcrumb.Root>
		<nav class="flex items-center gap-1" aria-label="App">
			<Button variant="ghost" class="text-title text-muted-foreground">Assets</Button>
			<Button variant="ghost" class="text-title text-muted-foreground">Settings</Button>
			<Button variant="ghost" size="icon" aria-label="Toggle theme"><Icon icon={Moon} size="sm" /></Button>
		</nav>
	</header>

	<!-- Default pages leave room at the bottom for the floating AI panel. -->
	<main class="mx-auto mt-12 flex w-full {config.max} flex-col gap-4 {width === 'default' ? 'pb-36' : ''}">
		<div class="flex items-baseline justify-between">
			<h1 class="text-heading">Page title</h1>
			<span class="text-caption text-muted-foreground">{config.label}</span>
		</div>

		{#if width === 'narrow'}
			{#each ['General', 'Notifications', 'Danger zone'] as title (title)}
				<section class="flex h-32 flex-col gap-1 rounded-xl bg-card p-4 shadow-hairline">
					<p class="text-title">{title}</p>
					<p class="text-caption text-muted-foreground">One card per group</p>
				</section>
			{/each}
		{:else if width === 'default'}
			<section class="flex h-[420px] gap-4 rounded-xl bg-card p-4 shadow-hairline">
				<div class="flex w-[230px] flex-col gap-1">
					<p class="text-title">Primary card</p>
					<p class="text-caption text-muted-foreground">Side list (Steps)</p>
				</div>
				<div class="flex flex-1 items-center justify-center rounded-sm bg-background">
					<p class="text-caption text-muted-foreground">Main content panel</p>
				</div>
			</section>
			<section class="mx-auto flex h-20 w-[497px] flex-col gap-1 rounded-xl bg-card p-4 shadow-hairline">
				<p class="text-title">Connected card</p>
				<p class="text-caption text-muted-foreground">Joined by a Separator</p>
			</section>
		{:else}
			<div class="grid grid-cols-3 gap-4">
				{#each ['Responses', 'Completion', 'Top character'] as title (title)}
					<section class="flex h-28 flex-col gap-1 rounded-xl bg-card p-4 shadow-hairline">
						<p class="text-caption text-muted-foreground">{title}</p>
						<p class="text-heading">—</p>
					</section>
				{/each}
			</div>
			<div class="grid grid-cols-3 gap-4">
				<section class="col-span-2 flex h-72 flex-col gap-1 rounded-xl bg-card p-4 shadow-hairline">
					<p class="text-title">Main chart or list</p>
				</section>
				<section class="flex h-72 flex-col gap-1 rounded-xl bg-card p-4 shadow-hairline">
					<p class="text-title">Side panel</p>
				</section>
			</div>
		{/if}
	</main>

	{#if width === 'default'}
		<div class="absolute bottom-8 left-1/2 flex h-24 w-[446px] -translate-x-1/2 items-center justify-center rounded-xl bg-card p-2 shadow-raised">
			<p class="text-caption text-muted-foreground">Floating AI panel · bottom center, shadow-raised</p>
		</div>
	{/if}
</div>
