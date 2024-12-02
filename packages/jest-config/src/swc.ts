import type { Config as SWCConfig } from '@swc/core'
import { Config as JestConfig } from 'jest'
import { defineJestTransform, getRootSwc } from './utils.js'

const swc = getRootSwc()

export const withSWC = (config?: Partial<SWCConfig>) => {
    return (jest?: Partial<JestConfig>): Partial<JestConfig> => {
        return {
            ...(jest || {}),
            ...defineJestTransform(
                '@swc/jest',
                defineSwcConfiguration({
                    ...(swc || {}),
                    ...(config || {})
                })
            )
        }
    }
}

export const defineSwcConfiguration = (config: Partial<SWCConfig>): Partial<SWCConfig> => {
    const options = {
        ...(swc || {}),
        ...(config || {})
    } satisfies Partial<SWCConfig>

    return {
        ...options,
        jsc: {
            ...(options.jsc || {}),
            parser: {
                ...(options.jsc?.parser || {}),
                syntax: options.jsc?.parser?.syntax || 'typescript',
                decorators: options.jsc?.parser?.decorators || true
            },
            transform: {
                legacyDecorator: true,
                decoratorMetadata: true,
                ...(options.jsc?.transform || {}),
                react: {
                    runtime: 'automatic',
                    ...(options.jsc?.transform?.react || {})
                }
            }
        }
    }
}
