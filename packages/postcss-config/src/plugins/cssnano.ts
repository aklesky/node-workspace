import cssnano from 'cssnano'
import { CssNanoOptions } from './types'

export default (options?: CssNanoOptions) => {
    return cssnano(options)
}
