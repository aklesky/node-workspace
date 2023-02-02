# ESLint TypeScript & Jest Preset

Shareable Configuration for Linting and Testing

- [ESLint TypeScript \& Jest Preset](#eslint-typescript--jest-preset)
  - [Usage for Node/Typescript Preset](#usage-for-nodetypescript-preset)
  - [Usage for Jest Preset](#usage-for-jest-preset)
  - [Jest Preset](#jest-preset)
  - [Node \& Typescript Preset](#node--typescript-preset)
  - [Supported Versions](#supported-versions)

## Usage for Node/Typescript Preset

```json
{
    "extends": "@aklesky/eslint-config/node/node"
}
```

## Usage for Jest Preset

```json
{
    "extends": "@aklesky/eslint-config/node/jest"
}
```

## Jest Preset

> Configuration extends preset from node and adds jest rules.

```json
{
    "env": {
        "jest/globals": true,
    },
    "plugins": [
        "jest",
    ],
    "rules": {
        "jest/no-disabled-tests": "warn",
        "jest/no-focused-tests": "error",
        "jest/no-identical-title": "error",
        "jest/prefer-to-have-length": "warn",
        "jest/valid-expect": "error",
    }
}
```

## Node & Typescript Preset

> enabled node rules and environments

```json
{
    "root": true,
    "env": {
        "node": true,
    },
    "parser": "@typescript-eslint/parser",
    "extends": [
        "eslint:recommended",
        "plugin:@typescript-eslint/eslint-recommended",
        "plugin:@typescript-eslint/recommended",
        "prettier",
    ],
    "plugins": ["@typescript-eslint", "prettier"],
    "rules": {
        "no-console": ["error", { "allow": ["warn", "error","info"] }],
        "prettier/prettier": ["error", prettier],
        "@typescript-eslint/no-explicit-any": "off",
        "@typescript-eslint/no-non-null-assertion": "off",
        "@typescript-eslint/no-unused-vars": ["warn", { "ignoreRestSiblings": true }],
    }
}

```

## Supported Versions

| Name       | Version    | Supported          |
| ---------- | ---------- | ------------------ |
| Node       | >= 18.13.0 | :white_check_mark: |
| Typescript | >= 4.9.4   | :white_check_mark: |
| Jest       | >= 29.4.1  | :white_check_mark: |
| ESLint     | >= 8.33.0  | :white_check_mark: |
