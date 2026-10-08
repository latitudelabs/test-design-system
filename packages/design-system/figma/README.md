# Figma Code Connect

Templates that map components in the Figma library to `@latitudelabs/design-system` code, so Dev Mode shows real
usage (`<Button variant="ghost" size="sm">Share</Button>`) instead of generated CSS.

One file per Figma component. The `// url=` header points at the component set's node in Figma. Property names must
match the Figma component properties exactly.

These files are not part of the published package (`src/lib` is what ships).
