import type { Config } from 'tailwindcss'
import { FileType, TailwindOptions } from './interfaces.js'
import typography from '@tailwindcss/typography'
import forms from '@tailwindcss/forms'
import aspectRatio from '@tailwindcss/aspect-ratio'
import lineClamp from '@tailwindcss/line-clamp'

const defaultPath = './src/**/*.{ts,tsx}'

const getTailwindConfig = (config: Config, options?: TailwindOptions): Config => {
    let content
    if (config.content) {
        content = (Array.isArray(config.content) && [...config.content, defaultPath]) || {
            ...config.content,
            files: [...(config.content as FileType).files, defaultPath],
        }
    }

    return {
        ...config,
        content: content || [defaultPath],
        plugins: [
            (options?.typography && typography) || undefined,
            (options?.forms && forms) || undefined,
            (options?.aspectRatio && aspectRatio) || undefined,
            (options?.lineClamp && lineClamp) || undefined,
        ].filter(Boolean),
    }
}

export = getTailwindConfig
