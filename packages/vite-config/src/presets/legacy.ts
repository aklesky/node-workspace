import { withLegacy } from '../plugins/plugin.js'
import base from './base.js'

export default {
    ...base,
    ...withLegacy({
        targets: ['defaults', 'not IE 11'],
    }),
}
