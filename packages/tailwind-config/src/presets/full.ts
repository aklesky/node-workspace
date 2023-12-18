import { defineConfig } from '../config.js'
import { withAspectRatio, withForms, withTypography } from '../plugins.js'

export default defineConfig(withTypography(), withAspectRatio(), withForms())
