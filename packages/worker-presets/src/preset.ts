import base from '@aklesky/vite-presets'
import { mergeConfig, type UserConfig } from 'vite'
import { withCloudflare } from './plugin.js'

const config: UserConfig = mergeConfig(base, withCloudflare())

export { base, withCloudflare }

export default config
