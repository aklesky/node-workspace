import { base, withCloudflare } from '@aklesky/worker-presets'
import react, { type Options } from '@vitejs/plugin-react'
import rsc, { type RscPluginOptions } from '@vitejs/plugin-rsc'
import { resolve } from 'node:path'
import { mergeConfig, type UserConfig } from 'vite'

export interface ReactServerComponentsOptions {
    root: string
    outDir: string
    entries: {
        ssr: string
        client: string
    }
    react?: Options
    rsc?: RscPluginOptions
    cloudflare?: Parameters<typeof withCloudflare>[0]
}

const required = (value: string | undefined, name: string): string => {
    if (!value) {
        throw new Error(`withReactServerComponents: options.${name} is required`)
    }
    return value
}

export const withReactServerComponents = (options: ReactServerComponentsOptions): UserConfig => {
    const root = required(options?.root, 'root')
    const outDir = resolve(root, required(options?.outDir, 'outDir'))
    const ssr = resolve(root, required(options?.entries?.ssr, 'entries.ssr'))
    const client = resolve(root, required(options?.entries?.client, 'entries.client'))

    const config: UserConfig = {
        plugins: [react({ compiler: true, ...options.react }), rsc(options.rsc)],
        environments: {
            rsc: {
                build: {
                    outDir: resolve(outDir, 'rsc')
                }
            },
            ssr: {
                build: {
                    outDir: resolve(outDir, 'rsc', 'ssr'),
                    rolldownOptions: {
                        input: { index: ssr }
                    }
                },
                optimizeDeps: {
                    entries: [ssr]
                }
            },
            client: {
                build: {
                    outDir: resolve(outDir, 'client'),
                    rolldownOptions: {
                        input: { index: client }
                    }
                }
            }
        }
    }

    return mergeConfig(
        mergeConfig(
            mergeConfig(base, config),
            withCloudflare({ ...options.cloudflare, viteEnvironment: { name: 'rsc', childEnvironments: ['ssr'] } })
        ),
        { root, build: { outDir } }
    )
}
