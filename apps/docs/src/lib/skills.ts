// Loads the agent skills straight from the repo so the docs page always shows the current versions.

type Skill = {
	name: string;
	description: string;
	body: string;
	audience: 'product' | 'maintainer';
	path: string;
	files: string[];
};

const product = import.meta.glob('../../../../packages/design-system/skills/*/SKILL.md', { query: '?raw', import: 'default', eager: true }) as Record<string, string>;
const maintainer = import.meta.glob('../../../../.claude/skills/*/SKILL.md', { query: '?raw', import: 'default', eager: true }) as Record<string, string>;
// Bundled files (scripts, references) per skill, to show what ships alongside SKILL.md.
const extras = Object.keys(
	import.meta.glob(['../../../../packages/design-system/skills/*/*/*', '../../../../.claude/skills/*/*/*'], { query: '?url', eager: true })
);

function parse(raw: string, file: string, audience: Skill['audience']): Skill {
	const [, front = '', body = raw] = raw.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/) ?? [];
	const field = (key: string) => front.match(new RegExp(`^${key}:\\s*(.*)$`, 'm'))?.[1]?.trim() ?? '';
	const dir = file.replace(/^(\.\.\/)+/, '').replace(/\/SKILL\.md$/, '');
	return {
		name: field('name'),
		description: field('description'),
		body: body.trim(),
		audience,
		path: dir,
		files: extras.filter((f) => f.includes(`/${dir}/`)).map((f) => f.split(`/${dir}/`)[1]),
	};
}

export const skills: Skill[] = [
	...Object.entries(product).map(([f, raw]) => parse(raw, f, 'product')),
	...Object.entries(maintainer).map(([f, raw]) => parse(raw, f, 'maintainer')),
].sort((a, b) => a.name.localeCompare(b.name));
