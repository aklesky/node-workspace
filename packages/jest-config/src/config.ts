export type { Config } from 'jest'
import type { Config } from 'jest'
import { base } from './constants.js'

export type ConfigFn = (config?: Config) => Config

export const defineConfig = (...hooks: ConfigFn[]): Config => {
    return hooks.reduce((acc, hook) => {
        return hook(acc)
    }, base)
}

export default defineConfig
