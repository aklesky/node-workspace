import common from './presets/common.js'
import node from './presets/node.js'
import type { TSESLint } from './utils.js'
import { eslint, tseslint } from './utils.js'

export default tseslint.config(
    eslint.configs.recommended,
    tseslint.configs.recommended,
    common,
    node
) as TSESLint.FlatConfig.ConfigArray
