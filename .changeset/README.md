# Changesets

Every change to a published package needs a changeset describing it:

```bash
pnpm changeset
```

Pick the package(s), the bump (patch = fix, minor = new feature, major = breaking) and write a one-line summary for
the changelog. On merge to `main`, the release workflow opens a "Version packages" PR; merging that PR publishes to
GitHub Packages.
