import { Config } from 'jest'

const base: Partial<Config> = {
    collectCoverage: true,
    testEnvironment: 'node',
    testMatch: ['**/?(*.)+(spec|test).[jt]s?(x)'],
    transform: {
        '^.+\\.(t|j)sx)?$': '@swc/jest',
    },
}

export = base
