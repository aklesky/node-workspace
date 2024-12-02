import type { Config } from 'tailwindcss'
export type { Config } from 'tailwindcss'

const defaultPath = './src/**/*.{ts,tsx,html}'
export type ConfigFn = (config: Config) => Config
export const defineConfig = (...hooks: ConfigFn[]): Config => {
    const config = hooks.reduce(
        (acc, hook) => {
            return hook(acc)
        },
        {
            content: [defaultPath]
        } as Config
    )

    return config
}
