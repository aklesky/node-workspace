# @aklesky/vitest-presets

[![npm version](https://img.shields.io/npm/v/@aklesky/vitest-presets)](https://www.npmjs.com/package/@aklesky/vitest-presets)
[![npm downloads](https://img.shields.io/npm/dm/@aklesky/vitest-presets)](https://www.npmjs.com/package/@aklesky/vitest-presets)
[![license](https://img.shields.io/npm/l/@aklesky/vitest-presets)](https://github.com/aklesky/node-workspace/blob/next/LICENSE.md)

Shareable Vitest presets with coverage, HTML reports, profiling and ESLint rules.

One test setup for every project, from the first test to profiling a slow suite. Part of the [@aklesky/node-presets](https://github.com/aklesky/node-workspace#readme) collection.

## Features

- **Coverage shows the gaps.** Every file in `src` is part of the report, including files that no test touches yet.
- **Two kinds of output.** The verbose reporter for the terminal and an HTML report to open after the run.
- **Profiling on demand.** A separate preset runs the suite in a single fork and writes CPU and heap profiles.
- **Lint rules for tests.** The ESLint preset adds the recommended `@vitest/eslint-plugin` rules on top of [@aklesky/eslint-presets](https://www.npmjs.com/package/@aklesky/eslint-presets).

## Installation

Vitest loads its reporters and coverage provider from your project, so they are installed next to the preset:

```bash
pnpm add -D @aklesky/vitest-presets vitest @vitest/ui @vitest/coverage-v8 vite
```

## Usage

`vitest.config.ts`:

```ts
export { default } from '@aklesky/vitest-presets'
```

To change a setting, merge it into the preset:

```ts
import base from '@aklesky/vitest-presets'
import { defineConfig, mergeConfig } from 'vitest/config'

export default mergeConfig(
    base,
    defineConfig({
        test: {
            environment: 'jsdom'
        }
    })
)
```

To profile the suite, with profiles written to `./forks-profiles`:

```ts
export { default } from '@aklesky/vitest-presets/profiling.js'
```

For the test lint rules, in `eslint.config.js`:

```js
export { default } from '@aklesky/vitest-presets/eslint.js'
```

## Options

| Option                  | Value                                      |
| ----------------------- | ------------------------------------------ |
| `resolve.tsconfigPaths` | `true` (path aliases from `tsconfig.json`) |
| `test.reporters`        | HTML report in `./ui/index.html`, verbose  |
| `test.coverage`         | `v8` provider, includes `src/**`           |

## Compatibility

| Name    | Version |
| ------- | ------- |
| Vitest  | 5.0.5   |
| Vite    | 8.3.5   |
| Node.js | 24.22.1 |

## License

[MIT](https://github.com/aklesky/node-workspace/blob/next/LICENSE.md) © Aleksei Semiglasov
