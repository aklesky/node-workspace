import type { Config as SWCConfig } from '@swc/core'
import type { Config as JestConfig } from 'jest'
import { resolve } from 'path'
import fs from 'node:fs'

export const getRootSwc = () => {
    try {
        const root = process.cwd()
        const path = resolve(root, '.swcrc')
        if (!fs.existsSync(path)) {
            return {}
        }
        const content = fs.readFileSync(path, 'utf-8')
        return JSON.parse(content) as Partial<SWCConfig>
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
