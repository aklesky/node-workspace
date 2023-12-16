import { useRenderToPipeableStream } from '../../server/render.js'
import { isFunction } from '@aklesky/utilities/asserts/function.js'
import type { NextFunction } from '@aklesky/utilities/http/interfaces/types.js'
import type { IncomingMessage, ServerResponse } from 'http'
import { onTimeoutHandler, onShellReadyHandler, onFinishEventHandler } from './handlers.js'
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
        enableTimeout: config.enableTimeout,
        addClosingHtmlBodyTag: config.addClosingHtmlBodyTag,
    })
    return async (req: IncomingMessage, res: ServerResponse, next?: NextFunction) => {
        try {
            const component = await config.getEntry()
            const props = await config?.getEntryProps?.(req, res)
            await render(res, {
                component,
                props,
                onTimeoutEventHandler: config.onTimeoutHandler?.(req, res) || onTimeoutHandler(req, res),
                onAllReadyHandler: config.onAllReadyHandler?.(req, res),
                onErrorHandler: config.onErrorHandler?.(req, res),
                onFinishEventHandler: onFinishEventHandler(req, res, config.onFinishEventHandler),
                onShellErrorHandler: config.onShellErrorHandler?.(req, res),
                onShellReadyHandler: onShellReadyHandler(req, res, options, config.onShellReadyHandler),
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
