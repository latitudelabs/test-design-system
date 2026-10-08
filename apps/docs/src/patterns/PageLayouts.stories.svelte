<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import PageLayouts from './examples/PageLayouts.svelte';

	const { Story } = defineMeta({
		title: 'Patterns/Page layouts',
		parameters: {
			layout: 'fullscreen',
			docs: {
				description: {
					component: `The app frame every page shares, and the three content widths. Picking from these keeps products
lined up with each other.

**Frame:** \`bg-background\` page with 32px padding · header with the **breadcrumb** on the left (where you are)
and quiet **ghost** navigation on the right (\`text-title text-muted-foreground\`) · content starts 48px below,
centered, with a \`text-heading\` page title.

| Width | Max | Use for |
|---|---|---|
| Narrow | \`max-w-[640px]\` | Forms, settings, reading. One card per group, stacked. |
| Default | \`max-w-[970px]\` | Workspaces: one primary card (side list + main panel), connected cards below. |
| Wide | \`max-w-[1280px]\` | Dashboards: a row of stat cards, then a 2:1 grid of main and side panels. |

**Rules**
- Content lives on **cards** (\`shadow-hairline\`), never directly on the page background.
- Gaps between cards: 16px (\`gap-4\`). Between page sections: 32px.
- The **floating AI panel** sits bottom-center over the content with \`shadow-raised\`. Only one per page.
- Don't invent new widths. If none fits, the content probably needs restructuring.`,
				},
			},
		},
	});
</script>

<Story name="Narrow (forms, settings)">
	<PageLayouts width="narrow" />
</Story>

<Story name="Default (workspace)">
	<PageLayouts width="default" />
</Story>

<Story name="Wide (dashboard)">
	<PageLayouts width="wide" />
</Story>
