import common from './presets/common.js'
import { defineConfig, eslint, globalIgnores, tseslint } from './utils.js'

export default defineConfig(
    globalIgnores(['**/dist', '**/coverage']),
    eslint.configs.recommended,
    tseslint.configs.recommended,
    common
)
