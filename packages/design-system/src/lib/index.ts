// Public API of @latitudelabs/design-system.
//
// Simple components are exported directly:   <Button>, <Input>
// Compound components are namespaces:        <Card.Root>, <Card.Title>

export {
	Button,
	buttonVariants,
	type ButtonProps,
	type ButtonSize,
	type ButtonVariant
} from './components/ui/button/index.js';
export { Badge, badgeVariants, type BadgeVariant } from './components/ui/badge/index.js';
export { Input } from './components/ui/input/index.js';
export { Textarea } from './components/ui/textarea/index.js';
export { Label } from './components/ui/label/index.js';
export { Separator } from './components/ui/separator/index.js';
export { Switch } from './components/ui/switch/index.js';

// Latitude components (not in shadcn).
export { default as Icon, iconSizes, type IconSize } from './components/icon/icon.svelte';
export { PromptInput } from './components/prompt-input/index.js';
export { Steps, type Step } from './components/steps/index.js';
export { ChatMessage } from './components/chat-message/index.js';

export * as Avatar from './components/ui/avatar/index.js';
export * as Breadcrumb from './components/ui/breadcrumb/index.js';
export * as Card from './components/ui/card/index.js';
export * as Dialog from './components/ui/dialog/index.js';

export { cn } from './utils.js';
