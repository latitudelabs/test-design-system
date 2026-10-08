<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import Share from '@lucide/svelte/icons/share';
	import { Breadcrumb, Button, Card, ChatMessage, PromptInput, Separator, Steps } from '@latitudelabs/design-system';

	const { Story } = defineMeta({
		title: 'Patterns/Viewer experience',
		parameters: {
			layout: 'fullscreen',
			docs: {
				description: {
					component: `The Home screen from Figma, rebuilt only from design-system components. Use it as a reference
for composing a page: app header, a primary card, a connector, and a floating AI chat panel.`,
				},
			},
		},
	});

	const steps = [
		{ title: 'What’s your name?', description: 'Open Question' },
		{ title: 'How old are you?', description: 'Multiple choice' },
		{ title: 'Now, you’ll watch a new trailer of a Spider man...', description: 'Information' },
		{ title: 'Spider man trailer 2026', description: 'Video' },
		{ title: 'How did you like this trailer?', description: 'Open Question' },
		{ title: 'What characters do you remember the most?', description: 'Open Question' },
	];
</script>

<Story name="Home">
	<div class="relative min-h-[982px] bg-background px-8 py-8">
		<header class="flex items-center justify-between">
			<Breadcrumb.Root>
				<Breadcrumb.List>
					<Breadcrumb.Item><Breadcrumb.Link href="#projects">Projects</Breadcrumb.Link></Breadcrumb.Item>
					<Breadcrumb.Separator>/</Breadcrumb.Separator>
					<Breadcrumb.Item><Breadcrumb.Page>New</Breadcrumb.Page></Breadcrumb.Item>
				</Breadcrumb.List>
			</Breadcrumb.Root>
			<nav class="flex gap-4">
				<Button variant="ghost" class="text-title text-muted-foreground">Assets</Button>
				<Button variant="ghost" class="text-title text-muted-foreground">Settings</Button>
			</nav>
		</header>

		<main class="mx-auto mt-16 flex w-[970px] flex-col items-center">
			<Card.Root class="w-full">
				<Card.Header>
					<Card.Title>What characters do people like the most?</Card.Title>
					<Card.Description>Viewer experience</Card.Description>
					<Card.Action>
						<Button variant="ghost" size="sm"><Share data-icon="inline-start" />Share</Button>
					</Card.Action>
				</Card.Header>
				<Card.Content class="flex-row gap-0">
					<Steps class="w-[246px] shrink-0" {steps} current={0} onselect={() => {}} />
					<div class="flex h-[450px] flex-1 items-center justify-center rounded-sm bg-background">
						<div class="flex w-[430px] flex-col gap-4">
							<h2 class="text-heading">What’s your name?</h2>
							<PromptInput placeholder="My name is..." />
						</div>
					</div>
				</Card.Content>
			</Card.Root>

			<Separator orientation="vertical" class="h-4! w-[3px]! self-center! rounded-full" />

			<Card.Root class="w-[497px]">
				<Card.Header>
					<Card.Title>Insights</Card.Title>
					<Card.Description>ready when at least 10 responses</Card.Description>
				</Card.Header>
			</Card.Root>

			<div class="mt-2 flex w-[446px] flex-col gap-5 rounded-xl bg-card p-2 shadow-raised">
				<ChatMessage>
					Viewer experience is ready - it consists of a trailer and a few questions to understand how people like
					characters. Next step is to share it with viewers, or I could recruit them myself, if you would like that
				</ChatMessage>
				<PromptInput value="Yeah, let’s try that" />
			</div>
		</main>
	</div>
</Story>
