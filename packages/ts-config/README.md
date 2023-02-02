# Typescript Presets

A shareable TypeScript configuration with default rules.

Please have a look at the [TypeScript documentation](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html) for more information.

- [Typescript Presets](#typescript-presets)
  - [Node](#node)
  - [React](#react)
  - [Jest](#jest)
  - [Supported Versions](#supported-versions)

## Node

```json
{
    "extends": "@aklesky/ts-config/node/18/tsconfig.node.json"
}
```

## React

```json
{
    "extends": "@aklesky/ts-config/node/18/tsconfig.jsx.json"
}
```

## Jest

> extends jsx preset and adds jest types

```json
{
    "extends": "@aklesky/ts-config/node/18/tsconfig.jest.json"
}
```

## Supported Versions

| Name    | Version | Supported          |
| ------- | ------- | ------------------ |
| Typescript    | >= 4.9.5 | :white_check_mark: |
| Node    | >= 18.13.0 | :white_check_mark: |
