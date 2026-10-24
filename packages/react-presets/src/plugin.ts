import react, { type Options } from '@vitejs/plugin-react'
import type { UserConfig } from 'vite'

export const withReact = (options?: Options): UserConfig => {
    return {
        plugins: [react({ compiler: true, ...options })]
    }
}
