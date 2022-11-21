import { ESLint } from 'eslint'
import * as node from './node'

const config = {
    ...node,
    env: {
        ...(node.env || {}),
        'jest/globals': true,
    },
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
