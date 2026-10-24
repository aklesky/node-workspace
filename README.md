# @aklesky/node-presets

Shareable configuration presets for TypeScript, linting, formatting, testing and frontend builds.

## Why

Most projects start with the same TypeScript, ESLint, Prettier, Vite and Vitest setup. These presets keep that setup in one place, so a new project needs a few dependencies and one-line config files instead of copied boilerplate. A fix or an upgrade made here reaches every project through a regular dependency update.

The presets are opinionated and follow the defaults of their author. They are maintained for personal projects and published for anyone who finds the same defaults useful.

## Conventions

- **Exact versions.** Every dependency is pinned to a tested version, and Renovate keeps the versions current.
- **Project-owned tools.** The tool a project runs, such as `eslint`, `prettier`, `vite`, `vitest` or `wrangler`, is a peer dependency, so each project controls its version. Plugins and helpers come with the preset.
- **Current Node.js only.** The presets target the Node.js LTS lines (24 and 26) and ship ES modules.
- **0.x for now.** While a package is below 1.0, a minor release can contain breaking changes. Each package keeps its own version and changelog.

## Packages

| Package                                                                | Description                                                                            |
| ---------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| [@aklesky/eslint-presets](packages/eslint-presets/README.md)           | Shareable ESLint flat config presets for TypeScript projects.                          |
| [@aklesky/prettier-presets](packages/prettier-presets/README.md)       | Shareable Prettier configuration preset.                                               |
| [@aklesky/typescript-presets](packages/typescript-presets/README.md)   | Shareable TypeScript configuration presets for Node.js 24 and 26.                      |
| [@aklesky/vite-presets](packages/vite-presets/README.md)               | Shareable Vite presets for production frontend apps and legacy browsers.               |
| [@aklesky/vitest-presets](packages/vitest-presets/README.md)           | Shareable Vitest presets with coverage, HTML reports, profiling and ESLint rules.      |
| [@aklesky/tailwindcss-presets](packages/tailwindcss-presets/README.md) | Shareable Tailwind CSS v4 presets with forms, typography and a Vite config.            |
| [@aklesky/worker-presets](packages/worker-presets/README.md)           | Shareable Vite presets for Cloudflare Workers with static assets.                      |
| [@aklesky/oxc-presets](packages/oxc-presets/README.md)                 | Shareable oxlint and oxfmt presets for TypeScript projects.                            |
| [@aklesky/react-presets](packages/react-presets/README.md)             | Shareable Vite presets for React apps, React Server Components and Cloudflare Workers. |

## Requirements

- Node.js 24.22.1, pinned in `devEngines.runtime` in `package.json`
- pnpm 12.15.0, pinned in `packageManager` in `package.json`

## Development

```bash
pnpm install
pnpm nx run-many --target=build
pnpm exec oxlint
pnpm exec oxfmt --check
```

The repository lints and formats itself with [@aklesky/oxc-presets](packages/oxc-presets/README.md). The pre-commit hook runs oxfmt and `oxlint --fix` on staged files, and commitlint checks the commit message.

## Releases

Commits follow [Conventional Commits](https://www.conventionalcommits.org/). When a pull request is merged into `next`, the release workflow versions each package from its commits with `nx release`, writes its changelog and GitHub release, and publishes it to npm with trusted publishing.
