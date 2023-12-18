import legacy, { Options } from '@vitejs/plugin-legacy'

export const withLegacy = (options?: Options) => {
    return {
        plugins: [legacy(options)],
    }
}
