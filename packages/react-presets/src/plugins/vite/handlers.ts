import { isFunction } from '@aklesky/utilities/asserts/function.js'
import { StatusCodes } from '@aklesky/utilities/http/codes.js'
import { IncomingMessage, ServerResponse } from 'http'
import { ReactMiddlewareOptions } from '../../interfaces/server.js'
import { GenericHandler, OnFinishEventHandler, OnReadyHandler, PipeHandler } from '../../interfaces/types.js'

export const onShellReadyHandler = (
    req: IncomingMessage,
    res: ServerResponse,
    options: ReactMiddlewareOptions,
    callback?: GenericHandler<OnReadyHandler>,
) => {
    const next = callback?.(req, res)
    const meta = options.metaAttributes?.join('') || ''
    return async (pipe: PipeHandler, error?: Error) => {
        if (isFunction(next)) {
            return next(pipe, error)
        }
        res.statusCode = error ? StatusCodes.INTERNAL_SERVER_ERROR : StatusCodes.OK
        res.setHeader('Content-type', 'text/html; charset=UTF-8')
        res.setHeader('Transfer-Encoding', 'chunked')
        if (options.enableDoctypeHeader) {
            res.write('<!DOCTYPE html>')
        }
        res.write(`<html><head><title>${options.title || ''}</title>${meta}</head><body>`)
        pipe()
    }
}

export const onFinishEventHandler = (
    req: IncomingMessage,
    res: ServerResponse,
    callback?: GenericHandler<OnFinishEventHandler>,
) => {
    const next = callback?.(req, res)
    return async () => {
        if (isFunction(next)) {
            return next()
        }
        return
    }
}

export const onTimeoutHandler = (_req: IncomingMessage, res: ServerResponse) => async (cb?: () => void) => {
    if (isFunction(cb)) {
        cb()
    }
    res.end()
}
