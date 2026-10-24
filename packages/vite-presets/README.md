# @aklesky/vite-presets

[![npm version](https://img.shields.io/npm/v/@aklesky/vite-presets)](https://www.npmjs.com/package/@aklesky/vite-presets)
[![npm downloads](https://img.shields.io/npm/dm/@aklesky/vite-presets)](https://www.npmjs.com/package/@aklesky/vite-presets)
[![license](https://img.shields.io/npm/l/@aklesky/vite-presets)](https://github.com/aklesky/node-workspace/blob/next/LICENSE.md)

Shareable Vite presets for production frontend apps and legacy browsers.

One production build setup for frontend apps, so each `vite.config.ts` stays a few lines long. Part of the [@aklesky/node-presets](https://github.com/aklesky/node-workspace#readme) collection.

## Features

- **Production defaults.** Builds go to a clean `./dist` with hidden source maps: the `.map` files are there for error tracking, but browsers are not pointed to them.
- **Path aliases without a plugin.** The preset turns on Vite 8's built-in `resolve.tsconfigPaths`, so `vite-tsconfig-paths` is no longer needed.
- **Old browsers only on request.** The base preset keeps Vite's modern browser target; the legacy preset adds `@vitejs/plugin-legacy` when an app needs it.
- **No platform plugins.** Cloudflare Workers have their own package, [@aklesky/worker-presets](https://www.npmjs.com/package/@aklesky/worker-presets), so this install stays small.

## Installation

```bash
pnpm add -D @aklesky/vite-presets vite
```

## Usage

`vite.config.ts`:

```ts
export { default } from '@aklesky/vite-presets'
```

For old browsers, with the `defaults, not IE 11` browserslist targets:

```ts
export { default } from '@aklesky/vite-presets/presets/legacy.js'
```

To change a setting, merge it into the preset:

```ts
import base from '@aklesky/vite-presets'
import { mergeConfig } from 'vite'

export default mergeConfig(base, {
    server: {
        port: 8080
    }
})
```

## Options

The base preset resolves paths from the current working directory:

| Option                  | Value                                         |
| ----------------------- | --------------------------------------------- |
| `root`                  | `./src`                                       |
| `publicDir`             | `./public`                                    |
| `resolve.tsconfigPaths` | `true` (path aliases from `tsconfig.json`)    |
| `build.outDir`          | `./dist`, emptied before every build          |
| `build.sourcemap`       | `hidden` (source maps without a public link)  |
| `server.port`           | `PORT` environment variable, otherwise `3000` |

## pnpm

The legacy plugin depends on `core-js`, which has an install script. pnpm 11 and newer need it listed in `pnpm-workspace.yaml`:

```yaml
allowBuilds:
    core-js: false
```

## Compatibility

| Name                  | Version |
| --------------------- | ------- |
| Vite                  | 8.3.5   |
| @vitejs/plugin-legacy | 8.2.3   |
| Node.js               | 24.22.1 |

## License

[MIT](https://github.com/aklesky/node-workspace/blob/next/LICENSE.md) © Aleksei Semiglasov
