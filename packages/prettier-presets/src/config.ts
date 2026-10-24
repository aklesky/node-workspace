import type { Config } from 'prettier'

export const config: Config = {
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
    endOfLine: 'lf'
}

export default config
