import { cloudflare, type PluginConfig } from '@cloudflare/vite-plugin'
import type { UserConfig } from 'vite'

export const withCloudflare = (options?: PluginConfig): UserConfig => {
    return {
        root: process.cwd(),
        plugins: [cloudflare(options)]
    }
}
