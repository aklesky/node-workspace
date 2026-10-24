import base from '@aklesky/vite-presets'
import { mergeConfig, type UserConfig } from 'vite'
import { withReact } from './plugin.js'

const config: UserConfig = mergeConfig(base, withReact())

export { base, withReact }

export default config
