import node from '@aklesky/eslint-config/node.js'
import { tseslint } from '@aklesky/eslint-config/utils.js'
import prettier from 'eslint-config-prettier'
import plugin from 'eslint-plugin-prettier/recommended'
import preset from './preset.js'

export default tseslint.config(node, plugin, prettier, preset)
