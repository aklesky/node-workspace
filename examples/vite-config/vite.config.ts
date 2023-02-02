import {  defineConfig } from '@aklesky/vite-config/server/config.js'

export default defineConfig({
    vite: {
        root: "./src"
    },
    react: {
        entry: './entries/server.tsx',
        bootstrapModules: ['./entries/client.tsx'],
    },
})
