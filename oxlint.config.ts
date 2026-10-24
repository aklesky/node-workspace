import { defineConfig } from 'oxlint'
import preset from './packages/oxc-presets/dist/oxlint.js'

export default defineConfig({
    extends: [preset],
    ignorePatterns: ['external']
})
