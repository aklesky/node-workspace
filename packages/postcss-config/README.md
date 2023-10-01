# PostCSS Configuration Preset

- [PostCSS Configuration Preset](#postcss-configuration-preset)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Usage with @aklesky/tailwind-config](#usage-with-akleskytailwind-config)

## Installation

npm

```bash
npm install @aklesky/postcss-config
```

yarn

```bash
yarn add @aklesky/postcss-config
```

## Usage

> tsconfig.json

```json
{
// ...
    "ts-node": {
        "moduleTypes": {
            "postcss.config.ts": "cjs"
        }
    },
//...
}
```

>> postcss.config.ts

```typescript
import setup from '@aklesky/postcss-config/config.js'

export default {
    ...setup(),
}
```

## Usage with @aklesky/tailwind-config

> postcss.config.ts

```typescript
import setup from '@aklesky/postcss-config/config.js'
import tailwind from '@aklesky/tailwind-config/plugin.js'

const config = setup({})

export default {
    ...config,
    plugins: [...config.plugins, tailwind()],
}

```
