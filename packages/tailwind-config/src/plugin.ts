import tailwind, { Config } from 'tailwindcss'
import getTailwindConfig from './config'
import { TailwindOptions } from './interfaces'

export = (config?: Config, options?: TailwindOptions) => {
    return tailwind(getTailwindConfig(config, options))
}
