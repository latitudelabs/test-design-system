// Generated list — the curated Latitude icon set. To add an icon, add it here and in index.ts
// (see the "add an icon" section in the ds-add-component skill).

export type IconCategory = 'Navigation' | 'Actions' | 'Status' | 'Media' | 'People & AI';

export type IconEntry = { name: string; slug: string; category: IconCategory; keywords: string[] };

export const iconCatalog: IconEntry[] = [
	{ name: 'ArrowLeft', slug: 'arrow-left', category: 'Navigation', keywords: ['back', 'previous'] },
	{
		name: 'ArrowRight',
		slug: 'arrow-right',
		category: 'Navigation',
		keywords: ['next', 'forward', 'continue']
	},
	{ name: 'ArrowUp', slug: 'arrow-up', category: 'Navigation', keywords: ['send', 'submit', 'up'] },
	{ name: 'ArrowDown', slug: 'arrow-down', category: 'Navigation', keywords: ['down'] },
	{
		name: 'ChevronLeft',
		slug: 'chevron-left',
		category: 'Navigation',
		keywords: ['back', 'previous', 'collapse']
	},
	{
		name: 'ChevronRight',
		slug: 'chevron-right',
		category: 'Navigation',
		keywords: ['next', 'expand', 'breadcrumb']
	},
	{ name: 'ChevronUp', slug: 'chevron-up', category: 'Navigation', keywords: ['collapse', 'up'] },
	{
		name: 'ChevronDown',
		slug: 'chevron-down',
		category: 'Navigation',
		keywords: ['expand', 'dropdown', 'select']
	},
	{
		name: 'Menu',
		slug: 'menu',
		category: 'Navigation',
		keywords: ['hamburger', 'navigation', 'sidebar']
	},
	{ name: 'House', slug: 'house', category: 'Navigation', keywords: ['home', 'dashboard'] },
	{
		name: 'ExternalLink',
		slug: 'external-link',
		category: 'Navigation',
		keywords: ['open', 'new', 'tab']
	},
	{
		name: 'Ellipsis',
		slug: 'ellipsis',
		category: 'Navigation',
		keywords: ['more', 'options', 'overflow']
	},
	{
		name: 'EllipsisVertical',
		slug: 'ellipsis-vertical',
		category: 'Navigation',
		keywords: ['more', 'options', 'kebab']
	},
	{ name: 'Plus', slug: 'plus', category: 'Actions', keywords: ['add', 'create', 'new'] },
	{ name: 'Minus', slug: 'minus', category: 'Actions', keywords: ['remove', 'subtract'] },
	{ name: 'X', slug: 'x', category: 'Actions', keywords: ['close', 'dismiss', 'cancel', 'clear'] },
	{ name: 'Check', slug: 'check', category: 'Actions', keywords: ['done', 'confirm', 'selected'] },
	{ name: 'Search', slug: 'search', category: 'Actions', keywords: ['find', 'lookup', 'query'] },
	{ name: 'Pencil', slug: 'pencil', category: 'Actions', keywords: ['edit', 'rename', 'write'] },
	{ name: 'Trash', slug: 'trash', category: 'Actions', keywords: ['delete', 'remove'] },
	{ name: 'Copy', slug: 'copy', category: 'Actions', keywords: ['duplicate', 'clipboard'] },
	{ name: 'Share', slug: 'share', category: 'Actions', keywords: ['export', 'send'] },
	{ name: 'Download', slug: 'download', category: 'Actions', keywords: ['save', 'export'] },
	{ name: 'Upload', slug: 'upload', category: 'Actions', keywords: ['import', 'attach'] },
	{ name: 'Send', slug: 'send', category: 'Actions', keywords: ['message', 'submit'] },
	{
		name: 'RefreshCw',
		slug: 'refresh-cw',
		category: 'Actions',
		keywords: ['reload', 'retry', 'sync']
	},
	{ name: 'Funnel', slug: 'funnel', category: 'Actions', keywords: ['filter'] },
	{
		name: 'Settings',
		slug: 'settings',
		category: 'Actions',
		keywords: ['preferences', 'gear', 'config']
	},
	{ name: 'LogOut', slug: 'log-out', category: 'Actions', keywords: ['sign', 'out', 'exit'] },
	{ name: 'Link', slug: 'link', category: 'Actions', keywords: ['url', 'hyperlink'] },
	{ name: 'Info', slug: 'info', category: 'Status', keywords: ['information', 'details'] },
	{
		name: 'CircleAlert',
		slug: 'circle-alert',
		category: 'Status',
		keywords: ['error', 'warning', 'attention']
	},
	{
		name: 'TriangleAlert',
		slug: 'triangle-alert',
		category: 'Status',
		keywords: ['warning', 'caution']
	},
	{
		name: 'CircleCheck',
		slug: 'circle-check',
		category: 'Status',
		keywords: ['success', 'done', 'complete']
	},
	{ name: 'CircleX', slug: 'circle-x', category: 'Status', keywords: ['error', 'failed'] },
	{
		name: 'LoaderCircle',
		slug: 'loader-circle',
		category: 'Status',
		keywords: ['loading', 'spinner', 'progress']
	},
	{ name: 'Bell', slug: 'bell', category: 'Status', keywords: ['notifications', 'alerts'] },
	{ name: 'Lock', slug: 'lock', category: 'Status', keywords: ['private', 'secure', 'locked'] },
	{ name: 'Eye', slug: 'eye', category: 'Status', keywords: ['visible', 'show', 'preview'] },
	{ name: 'EyeOff', slug: 'eye-off', category: 'Status', keywords: ['hidden', 'hide'] },
	{
		name: 'CircleQuestionMark',
		slug: 'circle-question-mark',
		category: 'Status',
		keywords: ['help', 'question', 'support']
	},
	{ name: 'Play', slug: 'play', category: 'Media', keywords: ['start', 'video', 'trailer'] },
	{ name: 'Pause', slug: 'pause', category: 'Media', keywords: ['stop'] },
	{ name: 'Video', slug: 'video', category: 'Media', keywords: ['camera', 'recording'] },
	{ name: 'Image', slug: 'image', category: 'Media', keywords: ['photo', 'picture'] },
	{ name: 'FileText', slug: 'file-text', category: 'Media', keywords: ['document', 'page'] },
	{ name: 'Folder', slug: 'folder', category: 'Media', keywords: ['directory', 'project'] },
	{
		name: 'MessageSquare',
		slug: 'message-square',
		category: 'Media',
		keywords: ['chat', 'comment', 'conversation']
	},
	{ name: 'Mic', slug: 'mic', category: 'Media', keywords: ['voice', 'audio', 'record'] },
	{ name: 'Calendar', slug: 'calendar', category: 'Media', keywords: ['date', 'schedule'] },
	{ name: 'Clock', slug: 'clock', category: 'Media', keywords: ['time', 'duration'] },
	{ name: 'Star', slug: 'star', category: 'Media', keywords: ['favorite', 'rating'] },
	{ name: 'Heart', slug: 'heart', category: 'Media', keywords: ['like', 'favorite'] },
	{
		name: 'User',
		slug: 'user',
		category: 'People & AI',
		keywords: ['person', 'profile', 'account']
	},
	{
		name: 'Users',
		slug: 'users',
		category: 'People & AI',
		keywords: ['team', 'group', 'participants', 'viewers']
	},
	{
		name: 'Sparkles',
		slug: 'sparkles',
		category: 'People & AI',
		keywords: ['ai', 'magic', 'generate']
	},
	{ name: 'Bot', slug: 'bot', category: 'People & AI', keywords: ['ai', 'assistant', 'agent'] },
	{
		name: 'ChartColumn',
		slug: 'chart-column',
		category: 'People & AI',
		keywords: ['insights', 'analytics', 'data']
	},
	{ name: 'Sun', slug: 'sun', category: 'People & AI', keywords: ['light', 'mode', 'theme'] },
	{ name: 'Moon', slug: 'moon', category: 'People & AI', keywords: ['dark', 'mode', 'theme'] },
	{ name: 'Globe', slug: 'globe', category: 'People & AI', keywords: ['web', 'language', 'world'] },
	{ name: 'Mail', slug: 'mail', category: 'People & AI', keywords: ['email', 'inbox'] }
];
