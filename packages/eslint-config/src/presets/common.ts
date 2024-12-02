import type { Linter } from '../utils.js'

const common = {
    rules: {
        'no-console': ['error', { allow: ['warn', 'error', 'info'] }],
        'no-nested-ternary': 'error',
        'no-shadow': 'off',
        'no-unused-vars': 'off',
        'no-case-declarations': 'off',
        'prefer-const': 1,
        'semi': 'off',
        'no-useless-catch': 'error',
        'no-unreachable': 'error',
        'no-redeclare': 'error',
        'no-debugger': 'error',
        'no-const-assign': 'error'
    }
} as Linter.Config

export default common
