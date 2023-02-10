import autoprefixer, { Options } from 'autoprefixer'

export type AutoprefixerOptions = Options
export default (options?: Options) => {
    return autoprefixer(options)
}
