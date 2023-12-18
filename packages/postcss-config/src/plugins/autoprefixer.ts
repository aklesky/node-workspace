import autoprefixer from 'autoprefixer'
import { AutoPrefixOptions } from './types'
import { Config } from '../config.js'

export const withAutoPrefix = (options?: AutoPrefixOptions) => {
    return (config: Config) => {
        return {
            ...config,
            plugins: [...config.plugins, autoprefixer(options)],
        }
    }
}
