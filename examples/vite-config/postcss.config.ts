import setup from '@aklesky/postcss-config/config.js'
import tailwind from '@aklesky/tailwind-config/plugin.js'

const config = setup({})

console.info('tailwind', tailwind)

export default {
    ...config,
    plugins: [...config.plugins, tailwind()],
}
