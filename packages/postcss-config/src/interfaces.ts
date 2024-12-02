import { CssNanoOptions, NestingOptions, AutoPrefixOptions } from './plugins/types.js'

export interface PostCssConfig {
    cssnano?: CssNanoOptions
    nesting?: NestingOptions
    autoprefixer?: AutoPrefixOptions
}
