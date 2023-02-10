import { PostCssConfig } from './interfaces.js'
import autoprefixer from './plugins/autoprefixer.js'
import cssnano from './plugins/cssnano.js'
import nesting from './plugins/nesting.js'

export const getPostCssConfig = (config: PostCssConfig) => {
    return {
        plugins: [
            nesting(config.nesting),
            autoprefixer(config.autoprefixer),
            process.env.NODE_ENV === 'production' && cssnano(config.cssnano),
        ].filter(Boolean),
    }
}

export default getPostCssConfig
