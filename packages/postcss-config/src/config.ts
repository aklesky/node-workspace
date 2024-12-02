export interface Config {
    plugins: unknown[]
}

export type ConfigFn = (config: Config) => Config

export const defineConfig = (...hooks: ConfigFn[]): Config => {
    const config = hooks.reduce(
        (acc, hook) => {
            return hook(acc)
        },
        {
            plugins: []
        } as Config
    )

    return config
}
