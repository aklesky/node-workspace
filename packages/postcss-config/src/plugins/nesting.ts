import nesting from 'postcss-nesting'
import { NestingOptions } from './types'

export default (options?: NestingOptions) => {
    return nesting(options)
}
