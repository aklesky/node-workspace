import type { Config as SWCConfig } from '@swc/core'
import type { Config as JestConfig } from 'jest'
import fs from 'node:fs'
import { resolve } from 'node:path'

export const getRootSwc = (): Partial<SWCConfig> => {
    try {
        const root = process.cwd()
        const path = resolve(root, '.swcrc')
        if (!fs.existsSync(path)) {
            return {}
        }
        const content = fs.readFileSync(path, 'utf-8')
        return JSON.parse(content) satisfies Partial<SWCConfig>
    } catch (e) {
        return {}
    }
}

export const defineJestTransform = (
    name: string = 'babel-jest',
    options?: Record<string, unknown>,
): Partial<JestConfig> => {
    return {
        transform: {
            '^.+\\.(t|j)sx?$': [
                name,
                {
                    ...(options || {}),
                },
            ],
        },
    }
}
