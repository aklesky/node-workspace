import { useRenderToPipeableStream } from '@aklesky/streamable-react/pipeable/render.js'
import { isFunction } from '@aklesky/utilities/asserts/function.js'
import type { NextFunction } from '@aklesky/utilities/http/interfaces/types.js'
import type { IncomingMessage, ServerResponse } from 'http'
import { onAbort, onShellReady } from './handlers.js'
import { ReactServerMiddlewareConfig } from './interface.js'

export const useReactStreambleMiddleware = (options: ReactServerMiddlewareConfig) => {
    const render = useRenderToPipeableStream({
        timeout: options.timeout,
        identifierPrefix: options.identifierPrefix,
        namespaceURI: options.namespaceURI,
        nonce: options.nonce,
        progressiveChunkSize: options.progressiveChunkSize,
        bootstrapModules: options.bootstrapModules,
        bootstrapScripts: options.bootstrapScripts,
    })
    return async (req: IncomingMessage, res: ServerResponse, next?: NextFunction) => {
        try {
            const component = await options.getEntry()
            const props = await options?.getEntryProps?.(req, res)
            await render(res, {
                component,
                props,
                onAbort: options.onAbort?.(req, res) || onAbort(req, res),
                onAllReady: options.onAllReady?.(req, res),
                onError: options.onError?.(req, res),
                onStreamEnd: options.onStreamEnd?.(req, res),
                onShellError: options.onShellError?.(req, res),
                onShellReady: onShellReady(req, res, options.onShellReady),
            })
        } catch (e: unknown) {
            if (isFunction(next)) {
                return next?.(e)
            }
            res.end()
        }
    }
}

export default useReactStreambleMiddleware
