import base from '@aklesky/eslint-presets'
import { defineConfig, type Linter } from '@aklesky/eslint-presets/utils.js'
import vitest from '@vitest/eslint-plugin'
import { files } from './constants.js'

export const config: Linter.Config = {
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
}

export default defineConfig(base, config)
