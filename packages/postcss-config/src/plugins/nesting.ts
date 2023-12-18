import nesting from 'postcss-nesting'
import { Config } from '../config.js'
import { NestingOptions } from './types.js'

export const withNesting = (options?: NestingOptions) => {
    return (config: Config) => {
        return {
            ...config,
            plugins: [...config.plugins, nesting(options)],
        }
    }
}
