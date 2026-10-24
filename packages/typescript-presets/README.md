# @aklesky/typescript-presets

[![npm version](https://img.shields.io/npm/v/@aklesky/typescript-presets)](https://www.npmjs.com/package/@aklesky/typescript-presets)
[![npm downloads](https://img.shields.io/npm/dm/@aklesky/typescript-presets)](https://www.npmjs.com/package/@aklesky/typescript-presets)
[![license](https://img.shields.io/npm/l/@aklesky/typescript-presets)](https://github.com/aklesky/node-workspace/blob/next/LICENSE.md)

Shareable TypeScript configuration presets for Node.js 24 and 26.

Compiler options are defined once, so each `tsconfig.json` is a one-line `extends`. Part of the [@aklesky/node-presets](https://github.com/aklesky/node-workspace#readme) collection.

## Features

- **One preset per Node.js LTS line.** `node/24.x` and `node/26.x` set `target` and `lib` to what that Node.js version runs, so nothing is downleveled for a runtime the project does not target.
- **Strict and explicit.** `strict`, `isolatedModules` and `verbatimModuleSyntax` are always on. Type-only imports use `import type`, so every file compiles on its own with `tsc`, a bundler or another single-file compiler.
- **Ready for TypeScript 7.** The presets only use options that TypeScript 6 and 7 both support.

## Installation

```bash
pnpm add -D @aklesky/typescript-presets typescript @types/node
```

## Usage

Node.js code:

```json
{
    "extends": "@aklesky/typescript-presets/node/24.x/node.json"
}
```

A library with declaration files:

```json
{
    "extends": "@aklesky/typescript-presets/node/24.x/build.json",
    "compilerOptions": {
        "outDir": "./dist",
        "rootDir": "./src"
    }
}
```

Code built by a bundler such as Vite:

```json
{
    "extends": "@aklesky/typescript-presets/node/24.x/bundler.json"
}
```

Replace `24.x` with `26.x` for Node.js 26.

## Presets

| Preset         | Use for                                                             |
| -------------- | ------------------------------------------------------------------- |
| `node.json`    | Type checking Node.js code (`module` / `moduleResolution` NodeNext) |
| `build.json`   | Emitting a library with declaration files                           |
| `bundler.json` | Code built by a bundler such as Vite (`Preserve` / `Bundler`, DOM)  |

All presets share `shared/base.json`: `strict`, `isolatedModules`, `verbatimModuleSyntax`, `moduleDetection: force`, `resolveJsonModule`, `noUnusedLocals`, `noUnusedParameters` and `noFallthroughCasesInSwitch`. The `node` presets set `"types": ["node"]`, so install `@types/node` for your Node.js version.

## TypeScript 7

The presets work with TypeScript 6 and 7. Tools that use the TypeScript API, such as typescript-eslint, still need TypeScript 6, so install both and let `tsc` run TypeScript 7:

```json
{
    "devDependencies": {
        "@typescript/native": "npm:typescript@7.0.2",
        "typescript": "npm:@typescript/typescript6@6.0.2"
    }
}
```

The [TypeScript configuration reference](https://www.typescriptlang.org/tsconfig/) explains every option.

## Compatibility

| Name       | Version       |
| ---------- | ------------- |
| TypeScript | 6.0.2 / 7.0.2 |
| Node.js    | 24.22.1       |

The `node/26.x` presets type-check with both TypeScript versions.

## License

[MIT](https://github.com/aklesky/node-workspace/blob/next/LICENSE.md) © Aleksei Semiglasov
