# Vite Configurations Presets

A collection of Vite configurations presets.

## Installation

```shell
npm -D install @aklesky/vite-config
```

```shell
yarn add -D @aklesky/vite-config
```

## Usage

### Server Side Rendering

```typescript
import {  defineConfig } from '@aklesky/vite-config/server/config.js'

export default defineConfig({
    vite: {
        root: "./src"
    },
    react: {
        entry: './entries/server.tsx',
        bootstrapModules: ['./entries/client.tsx'],
    },
})

```
