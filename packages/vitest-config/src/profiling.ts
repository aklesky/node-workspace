import { defineConfig } from 'vitest/config'
import tsconfigPaths from 'vite-tsconfig-paths'
import { resolve } from 'node:path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = resolve(__filename, '..')

export default defineConfig({
    plugins: [tsconfigPaths()],
    test: {
        watch: false,
        globalSetup: resolve(__dirname, 'setup.js'),
        poolOptions: {
            threads: {
                execArgv: [
                    '--cpu-prof',
                    '--cpu-prof-dir=threads-profiles',

                    '--heap-prof',
                    '--heap-prof-dir=threads-profiles'
                ],

                singleThread: true
            },
            forks: {
                execArgv: [
                    '--cpu-prof',
                    '--cpu-prof-dir=forks-profiles',

                    '--heap-prof',
                    '--heap-prof-dir=forks-profiles'
                ],

                singleFork: true
            }
        }
    }
})
