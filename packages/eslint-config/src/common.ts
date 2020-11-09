import { ESLint } from 'eslint'
import * as prettier from '@aklesky/prettier-config/config.js'

const common = {
    root: true,
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint', 'prettier'],
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        'prettier',
    ],
    rules: {
        'no-console': ['error', { allow: ['warn', 'error', 'info'] }],
        'prettier/prettier': ['error', prettier],
    },
} as ESLint.ConfigData

export = common
