import { defineConfig } from 'vite'

const root = process.cwd()

export const base = defineConfig({
    root: `${root}/src`,
    publicDir: `${root}/public`,
    optimizeDeps: {
        exclude: [`${root}/src/__tests__`, `${root}/src/__fixtures__`, `${root}/src/__mocks__`],
    },
    build: {
        outDir: `${root}/dist`,
        emptyOutDir: true,
        rollupOptions: {
            output: {
                dir: `${root}/dist`,
            },
        },
    },
    server: {
        port: (process.env.PORT && parseInt(process.env.PORT, 10)) || 3000,
    },
})

export default base
