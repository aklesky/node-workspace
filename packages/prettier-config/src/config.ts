import type { RequiredOptions, Options } from 'prettier'

export const config = {
    printWidth: 120,
    useTabs: false,
    semi: false,
    singleQuote: true,
    tabWidth: 4,
    trailingComma: 'none',
    quoteProps: 'consistent',
    bracketSpacing: true,
    bracketSameLine: true,
    arrowParens: 'avoid',
} as RequiredOptions

export default {
    ...config,
} as Options
