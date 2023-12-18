import type { Config } from 'jest'
import { defineConfig } from './config.js'
import { withSWC } from './swc.js'

const preset: Config = defineConfig(withSWC())
export default preset
