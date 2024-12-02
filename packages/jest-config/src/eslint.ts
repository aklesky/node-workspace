import base from '@aklesky/eslint-prettier-config/config.js'
import { tseslint, type Linter } from '@aklesky/eslint-config/utils.js'
import plugin from 'eslint-plugin-jest'
import { files } from './constants.js'

export const config = {
    files: files,
    plugins: { jest: plugin },
    languageOptions: {
        globals: plugin.environments.globals.globals
    },
    rules: {
        'jest/no-disabled-tests': 'warn',
        'jest/no-focused-tests': 'error',
        'jest/no-identical-title': 'error',
        'jest/prefer-to-have-length': 'warn',
        'jest/valid-expect': 'error'
    }
} as Linter.Config

export default tseslint.config(base, config)
