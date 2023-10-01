import { ESLint } from 'eslint'
import common from './common.js'

const node = {
    ...common,
    env: {
        node: true,
    },
    rules: {
        ...common.rules,
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-non-null-assertion': 'off',
        '@typescript-eslint/no-unused-vars': ['warn', { ignoreRestSiblings: true }],
    },
} as ESLint.ConfigData

export = node
