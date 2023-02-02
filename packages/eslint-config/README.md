# ESLint TypeScript & Jest Preset

Shareable Configuration for Linting and Testing

- [ESLint TypeScript \& Jest Preset](#eslint-typescript--jest-preset)
  - [Supported Versions](#supported-versions)
  - [Jest](#jest)
    - [Usage for Jest Preset](#usage-for-jest-preset)
  - [Node \& Typescript](#node--typescript)
    - [Usage for Node/Typescript Preset](#usage-for-nodetypescript-preset)

## Supported Versions

| Name    | Version | Supported          |
| ------- | ------- | ------------------ |
| Node    | >= 18.13.0 | :white_check_mark: |
| Typescript    | >= 4.9.4 | :white_check_mark: |
| Jest    | >= 29.4.1 | :white_check_mark: |
| ESLint    | >= 8.33.0 | :white_check_mark: |

## Jest

Configuration extends preset from node and adds jest rules.

```json
{
    // enabled jest rules and environments
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

### Usage for Jest Preset

```json
{
    "extends": "@aklesky/eslint-config/node/jest"
}
```

## Node & Typescript

```json
{
    /// enabled node rules and environments
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

### Usage for Node/Typescript Preset

```json
{
    "extends": "@aklesky/eslint-config/node/node"
}
```
