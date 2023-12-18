import { isFunction } from '@aklesky/utilities/asserts/function.js'
import type { NextFunction } from '@aklesky/utilities/http/interfaces/types.js'
import type { IncomingMessage, ServerResponse } from 'http'
import { ReactMiddlewareConfig, ReactMiddlewareOptions } from '../../interfaces/server.js'
import { withRenderToPipeableStream } from '../../server/render.js'
import { onFinishEventHandler, onShellReadyHandler, onTimeoutHandler } from './handlers.js'

export const withReactStreamble = (config: ReactMiddlewareConfig, options: ReactMiddlewareOptions) => {
    const render = withRenderToPipeableStream({
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

export default withReactStreamble
