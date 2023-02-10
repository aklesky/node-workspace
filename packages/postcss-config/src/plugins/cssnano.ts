import cssnano, { Options } from 'cssnano'

export type CssNanoOptions = Options
export default (options?: CssNanoOptions) => {
    return cssnano(options)
}
