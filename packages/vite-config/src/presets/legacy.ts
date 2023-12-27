import { defineConfig } from 'vite'
import { withLegacy } from '../plugins/plugin.js'
import base from './base.js'

export default defineConfig({
    ...base,
    ...withLegacy({
        targets: ['defaults', 'not IE 11'],
    }),
})
