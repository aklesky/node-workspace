import type { Config } from 'tailwindcss'
import typography from '@tailwindcss/typography'
import forms from '@tailwindcss/forms'
import aspectRatio from '@tailwindcss/aspect-ratio'

export const withTypography = () => {
    return (config: Config) => {
        return {
            ...config,
            plugins: [...(config?.plugins || []), typography]
        }
    }
}

export const withForms = () => {
    return (config: Config) => {
        return {
            ...config,
            plugins: [...(config?.plugins || []), forms]
        }
    }
}

export const withAspectRatio = () => {
    return (config: Config) => {
        return {
            ...config,
            plugins: [...(config?.plugins || []), aspectRatio]
        }
    }
}
