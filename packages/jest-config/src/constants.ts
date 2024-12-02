import type { Config } from 'jest'

export const files = ['**/*.spec.js', '**/*.test.js']
export const transform = '^.+\\.(t|j)sx?$'
export const defaultTestMatch = ['**/?(*.)+(spec|test).[jt]s?(x)']
export const defaultEsmExtensions = ['.ts', '.tsx']
export const defaultTimeout = 30000

export const base: Config = {
    verbose: (process.env.VERBOSE && process.env.VERBOSE === 'true') || false,
    clearMocks: true,
    collectCoverage: true,
    coverageProvider: 'v8',
    coveragePathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/dist/', '<rootDir>/coverage/'],
    testEnvironment: (process.env.TEST_ENVIRONMENT && process.env.TEST_ENVIRONMENT) || 'node',
    extensionsToTreatAsEsm: defaultEsmExtensions,
    testMatch: defaultTestMatch,
    moduleNameMapper: {
        '^(\\.{1,2}/.*)\\.js$': '$1'
    },
    testTimeout: defaultTimeout,
    openHandlesTimeout: defaultTimeout
}
