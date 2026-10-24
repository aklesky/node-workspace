import type { OxfmtConfig } from 'oxfmt'

const config: OxfmtConfig = {
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
    endOfLine: 'lf',
    sortPackageJson: false
}

export default config
