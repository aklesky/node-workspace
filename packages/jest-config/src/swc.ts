import { Config as JestConfig } from 'jest'
import type { Config as SWCConfig } from '@swc/core'
import { getRootSwc, defineJestTransform } from './utils'

const swc = getRootSwc()

export const withSWC = (config: Partial<SWCConfig>, jest: Partial<JestConfig>): JestConfig => {
    return {
        ...jest,
        ...defineJestTransform('@swc/jest', defineSwcConfiguration(config)),
    }
}

export const defineSwcConfiguration = (config: Partial<SWCConfig>): Partial<SWCConfig> => {
    const options = {
        ...(swc || {}),
        ...(config || {}),
    }
    return {
        ...(options || {}),
        jsc: {
            ...(options.jsc || {}),
            transform: {
                ...(options.jsc?.transform || {}),
                react: {
                    runtime: 'automatic',
                    ...(options.jsc?.transform?.react || {}),
                },
            },
        },
    }
}
