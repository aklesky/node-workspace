import nesting, { pluginOptions } from 'postcss-nesting'

export type NestingOptions = pluginOptions

export default (options?: pluginOptions) => {
    const _default = nesting.default || nesting
    return _default(options)
}
