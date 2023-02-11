import { CssNanoOptions, NestingOptions, AutoPrefixOptions } from './plugins/types'

export interface PostCssConfig {
    cssnano?: CssNanoOptions
    nesting?: NestingOptions
    autoprefixer?: AutoPrefixOptions
}
