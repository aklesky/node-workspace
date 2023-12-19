import { ESLint } from 'eslint'
import prettier from '@aklesky/prettier-config'

const checked = {
    root: true,
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint', 'prettier'],
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended-type-checked',
        'prettier',
    ],
    rules: {
        'no-console': ['error', { allow: ['warn', 'error', 'info'] }],
        'no-nested-ternary': 'error',
        'no-shadow': 'off',
        '@typescript-eslint/no-shadow': 'error',
        'prettier/prettier': ['error', prettier],
    },
    parserOptions: {
        project: true,
        tsconfigRootDir: process.cwd(),
    },
} as ESLint.ConfigData

export = checked
