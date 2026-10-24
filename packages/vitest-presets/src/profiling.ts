import { defineConfig } from 'vitest/config'
import { resolve } from 'node:path'

export default defineConfig({
    resolve: {
        tsconfigPaths: true
    },
    test: {
        watch: false,
        globalSetup: resolve(import.meta.dirname, 'setup.js'),
        pool: 'forks',
        maxWorkers: 1,
        isolate: false,
        execArgv: ['--cpu-prof', '--cpu-prof-dir=forks-profiles', '--heap-prof', '--heap-prof-dir=forks-profiles']
    }
})
