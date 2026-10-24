# @aklesky/react-presets

[![npm version](https://img.shields.io/npm/v/@aklesky/react-presets)](https://www.npmjs.com/package/@aklesky/react-presets)
[![npm downloads](https://img.shields.io/npm/dm/@aklesky/react-presets)](https://www.npmjs.com/package/@aklesky/react-presets)
[![license](https://img.shields.io/npm/l/@aklesky/react-presets)](https://github.com/aklesky/node-workspace/blob/next/LICENSE.md)

Shareable Vite presets for React apps, React Server Components and Cloudflare Workers.

One line of Vite config for a React app, a React app with a Worker, or React Server Components on Workers, with the React Compiler on. Part of the [@aklesky/node-presets](https://github.com/aklesky/node-workspace#readme) collection.

## Features

- **React Compiler on by default.** `@vitejs/plugin-react` runs Oxc's React Compiler, without Babel. Client code is compiled; server environments are skipped by design.
- **Three setups.** A single-page app on the [@aklesky/vite-presets](https://www.npmjs.com/package/@aklesky/vite-presets) base, a single-page app with a Worker on [@aklesky/worker-presets](https://www.npmjs.com/package/@aklesky/worker-presets), and React Server Components on Workers with `@vitejs/plugin-rsc` and Cloudflare's child environments.
- **TypeScript for JSX.** `tsconfig/jsx.json` extends the [@aklesky/typescript-presets](https://www.npmjs.com/package/@aklesky/typescript-presets) bundler preset with `jsx: react-jsx` and the Vite client types.
- **Lint rules for React.** [@aklesky/oxc-presets](https://www.npmjs.com/package/@aklesky/oxc-presets) ships `oxlint-react.js` with the hooks, JSX and React Compiler rules.

## Installation

```bash
pnpm add react react-dom
pnpm add -D @aklesky/react-presets vite wrangler @types/react @types/react-dom
```

For React Server Components, also install the plugin your entry files import:

```bash
pnpm add -D @vitejs/plugin-rsc
```

`wrangler` is a peer dependency of the Cloudflare presets, so it is installed for single-page apps too.

## Usage

### Single-page app

Keep `index.html` and the code in `./src`. `vite.config.ts`:

```ts
export { default } from '@aklesky/react-presets'
```

### Single-page app with a Worker

Keep `index.html` and `wrangler.jsonc` in the project root. `vite.config.ts`:

```ts
export { default } from '@aklesky/react-presets/worker.js'
```

`wrangler.jsonc` points `main` at the Worker and serves the app for every other route:

```jsonc
{
    "name": "my-app",
    "main": "./worker/index.ts",
    "compatibility_date": "2026-10-01",
    "assets": { "not_found_handling": "single-page-application" }
}
```

`vite build` writes the app to `./dist/client` and the Worker to `./dist/<worker name>`; deploy with `wrangler deploy`.

### React Server Components on Workers

`withReactServerComponents` takes the working directory, the output directory and the entry files; it has no defaults and throws when one is missing. `vite.config.ts`:

```ts
import { withReactServerComponents } from '@aklesky/react-presets/rsc.js'

export default withReactServerComponents({
    root: import.meta.dirname,
    outDir: 'dist',
    entries: {
        ssr: 'src/framework/entry.ssr.tsx',
        client: 'src/framework/entry.browser.tsx'
    }
})
```

The entry files follow the [`@vitejs/plugin-rsc` starter](https://github.com/vitejs/vite-plugin-react/tree/main/packages/plugin-rsc/examples/starter). The server components entry is the Worker, so `wrangler.jsonc` points `main` at it:

```jsonc
{
    "name": "my-app",
    "main": "./src/framework/entry.rsc.tsx",
    "compatibility_date": "2026-10-01",
    "compatibility_flags": ["nodejs_compat"]
}
```

The `rsc` environment runs the Worker and loads the `ssr` environment as its child. `vite build` writes the Worker to `<outDir>/rsc`, the server renderer to `<outDir>/rsc/ssr` and the app to `<outDir>/client`.

| Option           | Required | Contents                                                |
| ---------------- | -------- | ------------------------------------------------------- |
| `root`           | yes      | the working directory, used as the Vite root            |
| `outDir`         | yes      | the output directory, relative to `root`                |
| `entries.ssr`    | yes      | the server rendering entry, relative to `root`          |
| `entries.client` | yes      | the browser entry, relative to `root`                   |
| `react`          | no       | `@vitejs/plugin-react` options                          |
| `rsc`            | no       | `@vitejs/plugin-rsc` options                            |
| `cloudflare`     | no       | `@cloudflare/vite-plugin` options, such as `configPath` |

### Options

`withReact` takes the [`@vitejs/plugin-react` options](https://github.com/vitejs/vite-plugin-react/tree/main/packages/plugin-react#options). To turn the compiler off, or to pass compiler options:

```ts
import { base, withReact } from '@aklesky/react-presets'
import { mergeConfig } from 'vite'

export default mergeConfig(base, withReact({ compiler: false }))
```

### TypeScript

`tsconfig.json`:

```json
{
    "extends": "@aklesky/react-presets/tsconfig/jsx.json",
    "include": ["src"]
}
```

## Presets

| Import                                     | Contents                                                                    |
| ------------------------------------------ | --------------------------------------------------------------------------- |
| `@aklesky/react-presets`                   | the vite-presets base with React; exports `base` and `withReact`            |
| `@aklesky/react-presets/worker.js`         | the worker-presets setup with React                                         |
| `@aklesky/react-presets/rsc.js`            | `withReactServerComponents(options)` for React Server Components on Workers |
| `@aklesky/react-presets/tsconfig/jsx.json` | the bundler TypeScript preset with JSX and the Vite client types            |

## pnpm

The legacy plugin and the Cloudflare toolchain depend on `core-js`, `esbuild` and `workerd`, which have install scripts. pnpm 11 and newer need them listed in `pnpm-workspace.yaml`:

```yaml
allowBuilds:
    core-js: false
    esbuild: false
    workerd: false
```

## Compatibility

| Name                    | Version |
| ----------------------- | ------- |
| React                   | 19.3.1  |
| @vitejs/plugin-react    | 6.1.2   |
| oxc-transform-react     | 0.152.0 |
| @vitejs/plugin-rsc      | 0.5.38  |
| Vite                    | 8.3.4   |
| @cloudflare/vite-plugin | 1.65.0  |
| Wrangler                | 4.152.0 |
| Node.js                 | 24.22.1 |

Oxc's React Compiler integration is experimental, and `@vitejs/plugin-rsc` is below 1.0.

## License

[MIT](https://github.com/aklesky/node-workspace/blob/next/LICENSE.md) © Aleksei Semiglasov
