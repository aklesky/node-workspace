import { PostCssConfig } from './interfaces'
import autoprefixer from './plugins/autoprefixer'
import cssnano from './plugins/cssnano'
import nesting from './plugins/nesting'

const getPostCssConfig = (config: PostCssConfig) => {
    return {
        plugins: [
            nesting(config.nesting),
            autoprefixer(config.autoprefixer),
            process.env.NODE_ENV === 'production' && cssnano(config.cssnano),
        ].filter(Boolean),
    }
}

export = getPostCssConfig
