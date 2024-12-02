import tailwind, { Config } from 'tailwindcss'

export const withTailwindPlugin = (options?: Config) => {
    return (config?: { plugins: unknown[] }) => {
        return {
            ...config,
            plugins: [...(config?.plugins || []), tailwind(options)]
        }
    }
}
