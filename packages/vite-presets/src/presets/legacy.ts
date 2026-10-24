import { mergeConfig } from 'vite'
import { withLegacy } from '../plugins/plugin.js'
import base from './base.js'

export default mergeConfig(
    base,
    withLegacy({
        targets: ['defaults', 'not IE 11']
    })
)
