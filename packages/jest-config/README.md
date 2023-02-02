# Jest configuration preset

- [Jest configuration preset](#jest-configuration-preset)
  - [Usage](#usage)
  - [Preset](#preset)
    - [Supported Jest versions](#supported-jest-versions)

## Usage

> jest.config.js

```js
// jest.config.js
export { default } from '@aklesky/jest-config/config.js'
```

## Preset

```json
{
    "collectCoverage": true,
    "testEnvironment": "node",
    "extensionsToTreatAsEsm": [".ts", ".tsx"],
    "testMatch": ["**/__tests__/**/?(*.)+(spec|test).[jt]s?(x)"],
    "transform": {
        "^.+\\.(t|j)sx?$": [
            "@swc/jest",
            {
                "jsc": {
                    "transform": {
                        "react": {
                            "runtime": "automatic",
                        },
                    },
                },
            },
        ],
    },
    "moduleNameMapper": {
        "^(\\.{1,2}/.*)\\.js$": "$1",
    },
}
```

### Supported Jest versions

| Name    | Version | Supported          |
| ------- | ------- | ------------------ |
| Jest    | >= 29.4.1 | :white_check_mark: |
| [swc/jest](https://swc.rs/docs/usage/jest)    | >= 0.2.24 | :white_check_mark: |
