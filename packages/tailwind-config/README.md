# Tailwind @aklesky/tailwind-config

- [Tailwind @aklesky/tailwind-config](#tailwind-akleskytailwind-config)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Tailwind Options: Official Tailwindcss Plugins](#tailwind-options-official-tailwindcss-plugins)
    - [forms](#forms)
    - [typography](#typography)
    - [lineClamp](#lineclamp)
    - [aspectRatio](#aspectratio)

## Installation

npm

```bash
npm install @aklesky/tailwind-config
```

yarn

```bash
yarn add @aklesky/tailwind-config
```

## Usage

> *tailwind.config.cjs*

```typescript

const config = require('@aklesky/tailwind-config/config.js')

/** @type {import('tailwindcss').Config} */
const presets: Config = {
    // ...
}

interface TailwindOptions {
    forms?: boolean
    typography?: boolean
    aspectRatio?: boolean
    lineClamp?: boolean
}

/** @type {import('tailwindcss').Config} */
module.exports = {
    ...config(presets, options),
}
```

## Tailwind Options: Official Tailwindcss Plugins

### forms

enable @tailwindcss/forms

```typescript
    forms?: boolean
```

### typography

enable @tailwindcss/typography

```typescript
    typography?: boolean
```

### lineClamp

enable @tailwindcss/line-clamp

```typescript
    lineClamp?: boolean
```

### aspectRatio

enable @tailwindcss/aspect-ratio

```typescript
    aspectRatio?: boolean
```
