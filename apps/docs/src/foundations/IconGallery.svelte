<script lang="ts">
	import { Input } from '@latitudelabs/design-system';
	import * as icons from '@latitudelabs/design-system/icons';
	import { Icon, iconCatalog, type LucideIcon } from '@latitudelabs/design-system/icons';

	let query = $state('');
	let copied = $state('');

	const categories = [...new Set(iconCatalog.map((i) => i.category))];
	const matches = $derived(
		iconCatalog.filter((i) => {
			const q = query.trim().toLowerCase();
			return !q || i.name.toLowerCase().includes(q) || i.keywords.some((k) => k.includes(q));
		})
	);
	const component = (name: string) => (icons as unknown as Record<string, LucideIcon>)[name];

	async function copy(name: string) {
		await navigator.clipboard?.writeText(`import { ${name} } from '@latitudelabs/design-system/icons';`);
		copied = name;
		setTimeout(() => (copied = ''), 1500);
	}
</script>

<div class="flex w-[880px] flex-col gap-8 font-sans">
	<div class="flex flex-col gap-2">
		<Input bind:value={query} placeholder="Search {iconCatalog.length} icons — try “delete”, “ai”, “close”…" aria-label="Search icons" />
		<p class="text-caption text-muted-foreground" aria-live="polite">
			{copied ? `Copied import for ${copied}` : 'Click an icon to copy its import.'}
		</p>
	</div>
	{#each categories as category (category)}
		{@const items = matches.filter((i) => i.category === category)}
		{#if items.length}
			<section class="flex flex-col gap-3">
				<h3 class="text-title">{category}</h3>
				<div class="grid grid-cols-6 gap-3">
					{#each items as item (item.name)}
						<button
							type="button"
							onclick={() => copy(item.name)}
							class="bg-card shadow-hairline hover:bg-accent focus-visible:ring-ring/50 flex cursor-pointer flex-col items-center gap-2 rounded-lg px-2 py-4 outline-none focus-visible:ring-3"
						>
							<Icon icon={component(item.name)} size="lg" />
							<span class="text-caption text-muted-foreground">{item.name}</span>
						</button>
					{/each}
				</div>
			</section>
		{/if}
	{/each}
	{#if matches.length === 0}
		<p class="text-body text-muted-foreground">No icon matches “{query}”. Need one? Ask the design system team to add it.</p>
	{/if}
</div>
