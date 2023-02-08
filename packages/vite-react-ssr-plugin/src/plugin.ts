import deepmerge from '@aklesky/utilities/deepmerge.js'
import { useIgnoreMatchMiddleware } from '@aklesky/utilities/http/middlewares/ignore/ignore.js'
import { ComponentType } from 'react'
import type { PluginOption, ViteDevServer } from 'vite'
import { ReactServerMiddlewareOptions } from './interface.js'
import { useReactStreambleMiddleware } from './middleware.js'
import defaultOptions from './options.js'

export const useReactServerMiddlewarePlugin = (options: ReactServerMiddlewareOptions) => {
    const config = deepmerge(defaultOptions, options || {}) as ReactServerMiddlewareOptions
    return {
        name: 'vite-react-server-rendering',
        configureServer: async (server: ViteDevServer) => {
            try {
                server.middlewares.use(
                    useIgnoreMatchMiddleware(
                        useReactStreambleMiddleware(
                            {
                                getEntry: () =>
                                    server.ssrLoadModule(config.entry).then(x => x.default as ComponentType),
                                bootstrapModules: config.bootstrapModules,
                                bootstrapScripts: config.bootstrapScripts,
                                identifierPrefix: config.identifierPrefix,
                                namespaceURI: config.namespaceURI,
                                nonce: config.nonce,
                                bootstrapScriptContent: config.bootstrapScriptContent,
                                progressiveChunkSize: config.progressiveChunkSize,
                                onTimeoutHandler: config.onTimeoutHandler,
                                onAllReadyHandler: config.onAllReadyHandler,
                                onErrorHandler: config.onErrorHandler,
                                onFinishEventHandler: config.onFinishEventHandler,
                                onShellErrorHandler: config.onShellErrorHandler,
                                onShellReadyHandler: config.onShellReadyHandler,
                            },
                            config,
                        ),
                        config.ignoreUrlExpressions as RegExp[],
                    ),
                )
            } catch (error: unknown) {
                console.error(error)
                throw error
            }
        },
    } as PluginOption
}

export default useReactServerMiddlewarePlugin
