import tailwind from 'tailwindcss'

export const withTailwindPlugin = () => {
    return (config?: { plugins: unknown[] }) => {
        return {
            ...config,
            plugins: [...(config?.plugins || []), tailwind()]
        }
    }
}
