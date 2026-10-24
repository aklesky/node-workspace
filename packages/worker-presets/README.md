# @aklesky/worker-presets

[![npm version](https://img.shields.io/npm/v/@aklesky/worker-presets)](https://www.npmjs.com/package/@aklesky/worker-presets)
[![npm downloads](https://img.shields.io/npm/dm/@aklesky/worker-presets)](https://www.npmjs.com/package/@aklesky/worker-presets)
[![license](https://img.shields.io/npm/l/@aklesky/worker-presets)](https://github.com/aklesky/node-workspace/blob/next/LICENSE.md)

Shareable Vite presets for Cloudflare Workers with static assets.

The Vite setup for apps deployed to Cloudflare Workers: install the preset with Vite and Wrangler, then build and deploy. Part of the [@aklesky/node-presets](https://github.com/aklesky/node-workspace#readme) collection.

## Features

- **The plugin is included.** `@aklesky/vite-presets` and `@cloudflare/vite-plugin` come with the package. Vite and Wrangler are installed next to it, so `vite build` and `wrangler deploy` run with your project's versions.
- **Cloudflare's project layout.** The project root is the Vite root, so the Cloudflare plugin finds `wrangler.jsonc` and `wrangler deploy` finds the build output without extra flags.
- **The same base as vite-presets.** Hidden source maps, `tsconfig.json` path aliases and the rest come from the [@aklesky/vite-presets](https://www.npmjs.com/package/@aklesky/vite-presets) base preset.
- **Kept separate.** The Cloudflare toolchain is large, so it lives here and apps that only need vite-presets stay small.

## Installation

```bash
pnpm add -D @aklesky/worker-presets vite wrangler
```

## Usage

Keep `index.html` and `wrangler.jsonc` in the project root and the code in `./src`.

`vite.config.ts`:

```ts
export { default } from '@aklesky/worker-presets'
```

Build and deploy:

```bash
pnpm exec vite build
pnpm exec wrangler deploy
```

`vite build` writes the client assets to `./dist/client` and the Worker to `./dist/<worker name>`.

To pass [plugin options](https://developers.cloudflare.com/workers/vite-plugin/reference/api/), for example another Wrangler configuration file, use `withCloudflare`:

```ts
import { base, withCloudflare } from '@aklesky/worker-presets'
import { mergeConfig } from 'vite'

export default mergeConfig(base, withCloudflare({ configPath: './wrangler.staging.jsonc' }))
```

To change a Vite setting, merge it into the preset:

```ts
import config from '@aklesky/worker-presets'
import { mergeConfig } from 'vite'

export default mergeConfig(config, {
    build: {
        sourcemap: false
    },
    server: {
        port: 8788
    }
})
```

## Exports

| Export                    | Contents                                               |
| ------------------------- | ------------------------------------------------------ |
| default                   | the base preset with the Cloudflare plugin             |
| `withCloudflare(options)` | the Cloudflare plugin with `options` and the Vite root |
| `base`                    | the `@aklesky/vite-presets` base preset                |

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
| Vite                    | 8.3.5   |
| @cloudflare/vite-plugin | 1.65.0  |
| Wrangler                | 4.152.0 |
| Node.js                 | 24.22.1 |

## License

[MIT](https://github.com/aklesky/node-workspace/blob/next/LICENSE.md) © Aleksei Semiglasov
