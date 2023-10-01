import tailwind, { Config } from 'tailwindcss'
import { Plugin, Processor } from 'postcss'
import getTailwindConfig from './config'
import { TailwindOptions } from './interfaces'

export = (config?: Config, options?: TailwindOptions) => {
    return tailwind(getTailwindConfig(config, options)) as Plugin | Processor
}
