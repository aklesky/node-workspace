import type { Config } from 'jest'
import { defaultEsmExtensions, defaultTestMatch, defaultTimeout } from './constants'

export const base: Partial<Config> = {
    collectCoverage: true,
    testEnvironment: 'node',
    extensionsToTreatAsEsm: defaultEsmExtensions,
    testMatch: defaultTestMatch,
    moduleNameMapper: {
        '^(\\.{1,2}/.*)\\.js$': '$1',
    },
    testTimeout: defaultTimeout,
    openHandlesTimeout: defaultTimeout,
}

export default base
