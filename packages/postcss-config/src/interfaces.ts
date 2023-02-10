import { AutoprefixerOptions } from './plugins/autoprefixer.js'
import { CssNanoOptions } from './plugins/cssnano.js'
import { NestingOptions } from './plugins/nesting.js'

export interface PostCssConfig {
    cssnano?: CssNanoOptions
    nesting?: NestingOptions
    autoprefixer?: AutoprefixerOptions
}
