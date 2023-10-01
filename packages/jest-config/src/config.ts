import type { Config } from 'jest'
import base from './base'

export const defineConfig = (config: Partial<Config>): Partial<Config> => {
    return {
        ...base,
        ...(config || {}),
    }
}

export default defineConfig
