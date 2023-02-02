import { Config } from 'jest'

const base: Partial<Config> = {
    collectCoverage: true,
    testEnvironment: 'node',
    extensionsToTreatAsEsm: ['.ts', '.tsx'],
    testMatch: ['**/__tests__/**/?(*.)+(spec|test).[jt]s?(x)'],
    transform: {
        '^.+\\.(t|j)sx?$': [
            '@swc/jest',
            {
                jsc: {
                    transform: {
                        react: {
                            runtime: 'automatic',
                        },
                    },
                },
            },
        ],
    },
    moduleNameMapper: {
        '^(\\.{1,2}/.*)\\.js$': '$1',
    },
}

export = base
