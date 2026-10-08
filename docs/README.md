# How the Latitude design system fits together

**Code in this repo is the source of truth. Figma mirrors it.** Designers propose changes in Figma; once reviewed,
they land in the tokens and components here and are synced back to Figma.

![Design system map](./design-system-map.svg)

| Line | Meaning |
|---|---|
| **Thick** | Source of truth flowing into its mirror (code → Figma) |
| Dotted | A proposal, or something set up but not live yet (releases, GitHub Packages) |
| Thin | Everyday use |

## Editable source

Exports: `design-system-map.svg` (vector), `design-system-map.png` (2×, Slack and slides), `design-system-map.pdf`
(chart only, one page sized to the diagram).

Edit `design-system-map.mmd` (Mermaid) and re-render the images:

```bash
npx @mermaid-js/mermaid-cli -i docs/design-system-map.mmd -o docs/design-system-map.svg -c docs/mermaid.config.json -b white
npx @mermaid-js/mermaid-cli -i docs/design-system-map.mmd -o docs/design-system-map.png -c docs/mermaid.config.json -b white -s 2
npx @mermaid-js/mermaid-cli -i docs/design-system-map.mmd -o docs/design-system-map.pdf -c docs/mermaid.config.json --size 1700x600
```

You can also paste the source into https://mermaid.live to tweak it and export PNG/SVG.

```mermaid
flowchart LR
    rule{{"Rule: code in this repo is the source of truth.<br/>Figma mirrors it."}}

    subgraph repo["SOURCE OF TRUTH · design-system-test repo"]
        direction TB
        tokens[("Tokens<br/>colors, type, radius, shadows<br/>light + dark")]
        components["Svelte components + 62 icons<br/>shadcn-svelte + Bits UI"]
        skills["Agent skills<br/>build UI · review UI<br/>add component · sync Figma"]
        docs["Storybook docs<br/>foundations · components · patterns"]
        cli["Starter CLI<br/>npm create @latitudelabs"]
    end

    subgraph figma["MIRROR · Figma library"]
        direction TB
        figVars["Variables + text & shadow styles<br/>Light + Dark modes"]
        figComps["Components + icon library<br/>Code Connect links to code"]
    end

    subgraph dist["DISTRIBUTION · set up, not live yet"]
        direction TB
        ci["CI + release<br/>GitHub Actions, changesets"]
        registry[("GitHub Packages<br/>@latitudelabs/design-system")]
    end

    subgraph teams["PRODUCT TEAMS"]
        direction TB
        designers(["Designers"])
        devs(["Developers + AI agents"])
        apps["Product apps<br/>SvelteKit"]
    end

    rule -.- tokens
    tokens -->|styles| components
    components -->|documented in| docs

    tokens ==>|mirrored to| figVars
    components ==>|mirrored to| figComps
    figVars -.->|proposals, reviewed into code| tokens

    components -.->|released by| ci
    ci -.-> registry
    registry -.->|npm install| apps
    cli -->|scaffolds| apps
    skills -->|synced into each app| devs

    figComps -->|used by| designers
    docs -->|read by| devs
    devs -->|build| apps

    classDef truth fill:#CDF4D3,stroke:#2E8540,color:#1E1E1E
    classDef mirror fill:#E9DEFF,stroke:#6B3FD4,color:#1E1E1E
    classDef planned fill:#DCEEFF,stroke:#2F7BBF,color:#1E1E1E
    classDef people fill:#FFF1CC,stroke:#B88A00,color:#1E1E1E
    classDef ruleStyle fill:#1E1E1E,stroke:#1E1E1E,color:#FFFFFF
    class tokens,components,skills,docs,cli truth
    class figVars,figComps mirror
    class ci,registry planned
    class designers,devs,apps people
    class rule ruleStyle
    style repo fill:#F1FBF3,stroke:#2E8540
    style figma fill:#F6F1FF,stroke:#6B3FD4
    style dist fill:#F1F7FF,stroke:#2F7BBF,stroke-dasharray: 6 4
    style teams fill:#FFFAEB,stroke:#B88A00
    linkStyle 3,4 stroke:#1E1E1E,stroke-width:3px
```
