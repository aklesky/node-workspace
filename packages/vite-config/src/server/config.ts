import deepmerge from '@aklesky/utilities/deepmerge.js'
import ssr from '@aklesky/vite-react-ssr-plugin/plugin.js'
import { ConfigEnv, UserConfig, UserConfigExport } from 'vite'
import { react } from '../react.js'
import { ViteUserConfig } from './interfaces.js'

const defaultOptions: UserConfig = {
    build: {
        emptyOutDir: true,
        manifest: true,
    },
}

export const defineConfig = (options: ViteUserConfig): UserConfigExport => {
    try {
        const { vite, react: plugin } = options

        const config = deepmerge(defaultOptions, vite)
        return (_: ConfigEnv) => {
            return {
                ...config,
                plugins: [...(config.plugins || []), react(), ssr(plugin)],
            }
        }
    } catch (error: unknown) {
        console.error((error as Error).message)
        throw error
    }
}
