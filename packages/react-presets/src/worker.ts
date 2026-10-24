import { base, withCloudflare } from '@aklesky/worker-presets'
import { mergeConfig, type UserConfig } from 'vite'
import { withReact } from './plugin.js'

const config: UserConfig = mergeConfig(mergeConfig(base, withReact()), withCloudflare())

export default config
