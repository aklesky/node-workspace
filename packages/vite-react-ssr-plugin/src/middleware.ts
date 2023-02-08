import { useRenderToPipeableStream } from '@aklesky/streamable-react/pipeable/render.js'
import { isFunction } from '@aklesky/utilities/asserts/function.js'
import type { NextFunction } from '@aklesky/utilities/http/interfaces/types.js'
import type { IncomingMessage, ServerResponse } from 'http'
import { handleOnAbort, handleOnShellReady } from './handlers.js'
import { ReactServerMiddlewareConfig, ReactServerMiddlewareOptions } from './interface.js'

export const useReactStreambleMiddleware = (
    config: ReactServerMiddlewareConfig,
    options: ReactServerMiddlewareOptions,
) => {
    const render = useRenderToPipeableStream({
        timeout: config.timeout,
        identifierPrefix: config.identifierPrefix,
        namespaceURI: config.namespaceURI,
        nonce: config.nonce,
        progressiveChunkSize: config.progressiveChunkSize,
        bootstrapModules: config.bootstrapModules,
        bootstrapScripts: config.bootstrapScripts,
    })
    return async (req: IncomingMessage, res: ServerResponse, next?: NextFunction) => {
        try {
            const component = await config.getEntry()
            const props = await config?.getEntryProps?.(req, res)
            await render(res, {
                component,
                props,
                onAbort: config.onAbort?.(req, res) || handleOnAbort(req, res),
                onAllReady: config.onAllReady?.(req, res),
                onError: config.onError?.(req, res),
                onStreamEnd: config.onStreamEnd?.(req, res),
                onShellError: config.onShellError?.(req, res),
                onShellReady: handleOnShellReady(req, res, options, config.onShellReady),
            })
        } catch (e: unknown) {
            if (isFunction(next)) {
                return next(e)
            }
            res.end()
        }
    }
}

export default useReactStreambleMiddleware
