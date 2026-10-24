import type { Linter } from '../utils.js'

const common: Linter.Config = {
    rules: {
        'no-console': ['error', { allow: ['warn', 'error', 'info'] }],
        'no-nested-ternary': 'error',
        'no-shadow': 'off',
        'no-unused-vars': 'off',
        'no-case-declarations': 'off',
        'prefer-const': 1,
        'no-unexpected-multiline': 'off',
        '@typescript-eslint/consistent-type-imports': [
            'error',
            {
                prefer: 'type-imports',
                fixStyle: 'separate-type-imports'
            }
        ],
        '@typescript-eslint/no-import-type-side-effects': 'error'
    }
}

export default common
