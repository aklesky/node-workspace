# @aklesky/tailwindcss-presets

[![npm version](https://img.shields.io/npm/v/@aklesky/tailwindcss-presets)](https://www.npmjs.com/package/@aklesky/tailwindcss-presets)
[![npm downloads](https://img.shields.io/npm/dm/@aklesky/tailwindcss-presets)](https://www.npmjs.com/package/@aklesky/tailwindcss-presets)
[![license](https://img.shields.io/npm/l/@aklesky/tailwindcss-presets)](https://github.com/aklesky/node-workspace/blob/next/LICENSE.md)

Shareable Tailwind CSS v4 presets with forms, typography and a Vite config.

Two lines of CSS and one line of Vite config set up Tailwind CSS with forms and typography. Part of the [@aklesky/node-presets](https://github.com/aklesky/node-workspace#readme) collection.

## Features

- **CSS-first, like Tailwind CSS v4.** The presets are stylesheets you `@import`; there is no `tailwind.config.js`.
- **The common official plugins.** `@tailwindcss/forms` and `@tailwindcss/typography` are loaded with `@plugin` and come with the package. Import both or only the one a project needs.
- **No plugins for built-in utilities.** The core `aspect-*` and `line-clamp-*` utilities replace `@tailwindcss/aspect-ratio` and `@tailwindcss/line-clamp`.
- **A ready Vite config.** `vite.js` adds the Tailwind CSS Vite plugin, with minified CSS, to the [@aklesky/vite-presets](https://www.npmjs.com/package/@aklesky/vite-presets) base preset.

## Installation

```bash
pnpm add -D @aklesky/tailwindcss-presets tailwindcss vite
```

`@tailwindcss/vite` and `@aklesky/vite-presets` come with the package.

## Usage

Your main stylesheet:

```css
@import 'tailwindcss';
@import '@aklesky/tailwindcss-presets/preset.css';
```

`vite.config.ts`:

```ts
export { default } from '@aklesky/tailwindcss-presets/vite.js'
```

Without Vite, install `@tailwindcss/postcss` and add it to your PostCSS config instead. The stylesheets work the same way.

### Stylesheets

| Import                                        | Plugin                    |
| --------------------------------------------- | ------------------------- |
| `@aklesky/tailwindcss-presets/preset.css`     | forms and typography      |
| `@aklesky/tailwindcss-presets/forms.css`      | `@tailwindcss/forms`      |
| `@aklesky/tailwindcss-presets/typography.css` | `@tailwindcss/typography` |

### Plugin options

`vite.js` creates the Tailwind CSS Vite plugin with these options:

```ts
{
    optimize: {
        minify: true
    }
}
```

`withTailwind` takes other options, or adds Tailwind CSS to another Vite config. To build on the vite-presets base yourself, install `@aklesky/vite-presets` next to this package:

```ts
import base from '@aklesky/vite-presets'
import { withTailwind } from '@aklesky/tailwindcss-presets/vite.js'
import { mergeConfig } from 'vite'

export default mergeConfig(base, withTailwind({ optimize: false }))
```

## pnpm

The included vite-presets legacy plugin depends on `core-js`, which has an install script. pnpm 11 and newer need it listed in `pnpm-workspace.yaml`:

```yaml
allowBuilds:
    core-js: false
```

## Compatibility

| Name         | Version |
| ------------ | ------- |
| Tailwind CSS | 4.3.3   |
| Vite         | 8.3.5   |
| Node.js      | 24.22.1 |

## License

[MIT](https://github.com/aklesky/node-workspace/blob/next/LICENSE.md) © Aleksei Semiglasov
