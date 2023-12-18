import { defineConfig } from 'vite'

const root = process.cwd()

export const base = defineConfig({
    root: `${root}/src`,
    publicDir: `${root}/public`,
    server: {
        port: (process.env.PORT && parseInt(process.env.PORT, 10)) || 3000,
    },
})

export default base
