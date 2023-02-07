# Vite React Server Side Plugin

A Plugin for Vite to enable Server Side Rendering for React with Pipeable Stream.

## Installation

npm

```shell
npm install -D @aklesky/vite-react-ssr-plugin
```

yarn

```shell
yarn add -D @aklesky/vite-react-ssr-plugin
```

## Usage

```typescript
import plugin from '@aklesky/@aklesky/vite-react-ssr-plugin/plugin.js'
import { defineConfig } from 'vite'

export default defineConfig({
    // ...
    root: "src",
    plugins: [plugin({
        entry: './entries/server.tsx',
        bootstrapModules: ['./entries/client.tsx'],
    })],
    // ...
  }
)

```
