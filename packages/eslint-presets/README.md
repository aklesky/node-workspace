# @aklesky/eslint-presets

[![npm version](https://img.shields.io/npm/v/@aklesky/eslint-presets)](https://www.npmjs.com/package/@aklesky/eslint-presets)
[![npm downloads](https://img.shields.io/npm/dm/@aklesky/eslint-presets)](https://www.npmjs.com/package/@aklesky/eslint-presets)
[![license](https://img.shields.io/npm/l/@aklesky/eslint-presets)](https://github.com/aklesky/node-workspace/blob/next/LICENSE.md)

Shareable ESLint flat config presets for TypeScript projects.

A complete lint setup in a one-line `eslint.config.js`, so rules are not copied from project to project. Part of the [@aklesky/node-presets](https://github.com/aklesky/node-workspace#readme) collection.

## Features

- **Flat config only**, built with ESLint's `defineConfig`, the configuration format ESLint 10 supports.
- **No type-aware linting.** The `eslint` and `typescript-eslint` recommended rules run without a TypeScript project service, so linting needs no `tsconfig.json` setup and stays fast.
- **Prettier stays out of ESLint.** Prettier advises against running it as a lint rule. The preset only turns off `no-unexpected-multiline`, the one recommended rule that conflicts with Prettier.
- **Type-only imports stay type-only.** `import type` is required for imports used only as types, which `verbatimModuleSyntax` and Node.js type stripping rely on.
- **ES modules only.** `require()` is an error everywhere; the presets target ESM-only projects.
- **Build output is ignored.** `**/dist` and `**/coverage` never get linted.

## Installation

```bash
pnpm add -D @aklesky/eslint-presets eslint
```

## Usage

`eslint.config.js`:

```js
export { default } from '@aklesky/eslint-presets'
```

To change a rule:

```js
import config from '@aklesky/eslint-presets'
import { defineConfig } from '@aklesky/eslint-presets/utils.js'

export default defineConfig(config, {
    rules: {
        'no-console': 'off'
    }
})
```

Format separately with [@aklesky/prettier-presets](https://www.npmjs.com/package/@aklesky/prettier-presets):

```bash
pnpm exec prettier --check .
```

## Presets

| Import                              | Contents                                                                 |
| ----------------------------------- | ------------------------------------------------------------------------ |
| `@aklesky/eslint-presets`           | `common.js` plus Node.js globals and the Node.js rules below             |
| `@aklesky/eslint-presets/common.js` | `eslint` and `typescript-eslint` recommended rules plus the common rules |
| `@aklesky/eslint-presets/utils.js`  | `defineConfig`, `globalIgnores`, `tseslint`, `eslint`, `globals`         |

## Rules

On top of the recommended rules:

| Rule                                             | Setting                                                                       |
| ------------------------------------------------ | ----------------------------------------------------------------------------- |
| `no-console`                                     | error, except `console.warn`, `console.error` and `console.info`              |
| `no-nested-ternary`                              | error                                                                         |
| `prefer-const`                                   | warning                                                                       |
| `no-case-declarations`                           | off                                                                           |
| `@typescript-eslint/consistent-type-imports`     | error; `import type` in separate statements                                   |
| `@typescript-eslint/no-import-type-side-effects` | error                                                                         |
| `@typescript-eslint/no-unused-vars`              | error; names starting with `_` and rest siblings are ignored (Node.js preset) |
| `@typescript-eslint/no-shadow`                   | error (Node.js preset)                                                        |
| `@typescript-eslint/no-explicit-any`             | off (Node.js preset)                                                          |
| `@typescript-eslint/no-non-null-assertion`       | off (Node.js preset)                                                          |
| `@typescript-eslint/no-namespace`                | off (Node.js preset)                                                          |
| `@typescript-eslint/no-this-alias`               | error, except `self` and `_this` (Node.js preset)                             |

## Compatibility

| Name       | Version |
| ---------- | ------- |
| ESLint     | 10.13.0 |
| TypeScript | 6.0.2   |
| Node.js    | 24.22.1 |

typescript-eslint needs the TypeScript 6 API. If you build with TypeScript 7, [@aklesky/typescript-presets](https://www.npmjs.com/package/@aklesky/typescript-presets) shows how to keep both.

## License

[MIT](https://github.com/aklesky/node-workspace/blob/next/LICENSE.md) © Aleksei Semiglasov
