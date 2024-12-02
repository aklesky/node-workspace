import globals from 'globals'
import type { Linter } from '../utils.js'

const node = {
    languageOptions: {
        ecmaVersion: 2022,
        sourceType: 'module',
        globals: {
            ...globals.node
        }
    },
    rules: {
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-non-null-assertion': 'off',
        '@typescript-eslint/no-shadow': 'error',
        '@typescript-eslint/no-unused-vars': [
            'error',
            {
                ignoreRestSiblings: true,
                args: 'all',
                argsIgnorePattern: '^_',
                caughtErrors: 'all',
                caughtErrorsIgnorePattern: '^_',
                varsIgnorePattern: '^_'
            }
        ],
        '@typescript-eslint/no-namespace': 'off',
        '@typescript-eslint/no-this-alias': [
            'error',
            {
                allowedNames: ['self', '_this']
            }
        ]
    }
} as Linter.Config

export default node
