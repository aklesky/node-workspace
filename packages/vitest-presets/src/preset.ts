import { defineConfig } from 'vitest/config'
import { resolve } from 'node:path'

const root = process.cwd()

export default defineConfig({
    resolve: {
        tsconfigPaths: true
    },
    test: {
        reporters: [['html', { outputDir: resolve(root, 'ui') }], 'verbose'],
        coverage: {
            provider: 'v8',
            include: ['src/**']
        }
    }
})
