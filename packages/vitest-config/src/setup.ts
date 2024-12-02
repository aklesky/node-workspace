import { rmSync } from 'node:fs'
import { resolve } from 'node:path'

const root = process.cwd()

export function setup() {
    rmSync(resolve(root, './threads-profiles'), { force: true, recursive: true })
    rmSync(resolve(root, './forks-profiles'), { force: true, recursive: true })
}
