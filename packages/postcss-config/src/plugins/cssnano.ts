import cssnano from 'cssnano'
import { Config } from '../config.js'
import { CssNanoOptions } from './types.js'

export const withCssNano = (options?: CssNanoOptions) => {
    return (config: Config) => {
        if (process.env.NODE_ENV === 'production') {
            return {
                ...config,
                plugins: [...config.plugins, cssnano(options)],
            }
        }
        return config
    }
}
