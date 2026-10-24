# @aklesky/prettier-presets

[![npm version](https://img.shields.io/npm/v/@aklesky/prettier-presets)](https://www.npmjs.com/package/@aklesky/prettier-presets)
[![npm downloads](https://img.shields.io/npm/dm/@aklesky/prettier-presets)](https://www.npmjs.com/package/@aklesky/prettier-presets)
[![license](https://img.shields.io/npm/l/@aklesky/prettier-presets)](https://github.com/aklesky/node-workspace/blob/next/LICENSE.md)

Shareable Prettier configuration preset.

One formatting style for every project, with no per-project setup. Part of the [@aklesky/node-presets](https://github.com/aklesky/node-workspace#readme) collection.

## Features

- **Compact output:** 120-column lines, no semicolons, single quotes, no trailing commas and no parentheses around single arrow-function parameters.
- **4-space indentation**, consistent with the collection's `.editorconfig`.
- **Prettier runs on its own**, with `prettier --check` in CI and `prettier --write` on commit, never inside ESLint.

## Installation

```bash
pnpm add -D @aklesky/prettier-presets prettier
```

## Usage

`package.json`:

```json
{
    "prettier": "@aklesky/prettier-presets"
}
```

When a project needs a different setting, use `prettier.config.js` instead:

```js
import config from '@aklesky/prettier-presets'

export default {
    ...config,
    printWidth: 100
}
```

## Options

```json
{
    "printWidth": 120,
    "useTabs": false,
    "semi": false,
    "singleQuote": true,
    "tabWidth": 4,
    "trailingComma": "none",
    "quoteProps": "consistent",
    "bracketSpacing": true,
    "bracketSameLine": true,
    "arrowParens": "avoid",
    "endOfLine": "lf"
}
```

## Compatibility

| Name     | Version |
| -------- | ------- |
| Prettier | 3.9.10  |

## License

[MIT](https://github.com/aklesky/node-workspace/blob/next/LICENSE.md) © Aleksei Semiglasov
