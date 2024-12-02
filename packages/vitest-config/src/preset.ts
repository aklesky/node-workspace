import { defineConfig } from 'vitest/config'
import tsconfigPaths from 'vite-tsconfig-paths'
import { resolve } from 'node:path'

const root = process.cwd()

export default defineConfig({
    plugins: [tsconfigPaths()],
    test: {
        reporters: ['html', 'verbose'],
        coverage: {
            provider: 'v8'
        },
        outputFile: {
            html: resolve(root, 'ui/test-report.html')
        }
    }
})
