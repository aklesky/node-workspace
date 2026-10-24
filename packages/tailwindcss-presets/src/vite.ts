import base from '@aklesky/vite-presets'
import tailwindcss, { type PluginOptions } from '@tailwindcss/vite'
import { mergeConfig, type UserConfig } from 'vite'

export const defaultOptions: PluginOptions = {
    optimize: {
        minify: true
    }
}

export const withTailwind = (options?: PluginOptions): UserConfig => {
    return {
        plugins: [tailwindcss({ ...defaultOptions, ...options })]
    }
}

const config: UserConfig = mergeConfig(base, withTailwind())

export default config
