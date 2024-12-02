import base from '@aklesky/eslint-prettier-config/config.js'
import { tseslint, type Linter } from '@aklesky/eslint-config/utils.js'
import vitest from '@vitest/eslint-plugin'
import { files } from './constants.js'

export const config = {
    files: files,
    ...vitest.configs.recommended,
    languageOptions: {
        globals: {
            ...vitest.environments.env.globals
        }
    },
    rules: {
        ...vitest.configs.recommended.rules
    }
} as Linter.Config

export default tseslint.config(base, config)
