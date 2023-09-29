import { ESLint } from 'eslint'
import node from './node.js'

const config = {
    ...node,
    env: {
        ...(node.env || {}),
        jest: true,
    },
    extends: [...(node.extends || []), 'plugin:jest/recommended'],
    plugins: [...(node.plugins || []), 'jest'],
    rules: {
        ...(node.rules || {}),
        'jest/no-disabled-tests': 'warn',
        'jest/no-focused-tests': 'error',
        'jest/no-identical-title': 'error',
        'jest/prefer-to-have-length': 'warn',
        'jest/valid-expect': 'error',
    },
} as ESLint.ConfigData

export = config
