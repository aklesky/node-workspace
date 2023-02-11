import setup from '@aklesky/postcss-config/config.js'
import tailwind from '@aklesky/tailwind-config/plugin.js'

const config = setup({})

export default {
    ...config,
    plugins: [...config.plugins, tailwind()],
}
