import node from '@aklesky/eslint-config/presets/node.js'
import prettier from '@aklesky/prettier-config/config.js'
import type { Linter } from '@aklesky/eslint-config/utils.js'
export const config = {
    ...node,
    rules: {
        ...node.rules,
        'prettier/prettier': ['error', prettier]
    }
} as Linter.Config

export default config
