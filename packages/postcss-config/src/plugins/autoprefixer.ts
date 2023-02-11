import autoprefixer from 'autoprefixer'
import { AutoPrefixOptions } from './types'

export default (options?: AutoPrefixOptions) => {
    return autoprefixer(options)
}
