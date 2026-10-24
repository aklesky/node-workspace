import type { OxlintConfig } from 'oxlint'
import base from './oxlint.js'

const config: OxlintConfig = {
    ...base,
    plugins: [...(base.plugins ?? []), 'react'],
    env: { ...base.env, browser: true },
    rules: {
        ...base.rules,
        'react/error-boundaries': 'error',
        'react/exhaustive-deps': 'error',
        'react/forward-ref-uses-ref': 'error',
        'react/globals': 'error',
        'react/immutability': 'error',
        'react/incompatible-library': 'error',
        'react/jsx-key': 'error',
        'react/jsx-no-duplicate-props': 'error',
        'react/jsx-no-undef': 'error',
        'react/jsx-props-no-spread-multi': 'error',
        'react/no-children-prop': 'error',
        'react/no-danger-with-children': 'error',
        'react/no-did-mount-set-state': 'error',
        'react/no-did-update-set-state': 'error',
        'react/no-direct-mutation-state': 'error',
        'react/no-find-dom-node': 'error',
        'react/no-is-mounted': 'error',
        'react/no-render-return-value': 'error',
        'react/no-string-refs': 'error',
        'react/no-this-in-sfc': 'error',
        'react/no-unsafe': 'error',
        'react/no-will-update-set-state': 'error',
        'react/preserve-manual-memoization': 'error',
        'react/purity': 'error',
        'react/refs': 'error',
        'react/set-state-in-effect': 'error',
        'react/set-state-in-render': 'error',
        'react/static-components': 'error',
        'react/use-memo': 'error',
        'react/void-dom-elements-no-children': 'error',
        'react/void-use-memo': 'error',
        'react/rules-of-hooks': 'error',
        'react/only-export-components': ['warn', { allowConstantExport: true }]
    }
}

export default config
