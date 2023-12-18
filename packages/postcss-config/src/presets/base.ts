import { defineConfig } from '../config.js'
import { withAutoPrefix } from '../plugins/autoprefixer.js'
import { withCssNano } from '../plugins/cssnano.js'
import { withNesting } from '../plugins/nesting.js'

export default defineConfig(withAutoPrefix(), withNesting(), withCssNano())
