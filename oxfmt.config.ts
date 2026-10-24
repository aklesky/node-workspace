import { defineConfig } from 'oxfmt'
import preset from './packages/oxc-presets/dist/oxfmt.js'

export default defineConfig({
    ...preset,
    ignorePatterns: ['.github', 'external', 'pnpm-lock.yaml', 'CHANGELOG.md']
})
