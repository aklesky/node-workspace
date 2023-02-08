import { ReadyCallback, WritableCallback } from '@aklesky/streamable-react/interfaces/types.js'
import { isFunction } from '@aklesky/utilities/asserts/function.js'
import { HttpStatusCodes } from '@aklesky/utilities/http/codes.js'
import { IncomingMessage, ServerResponse } from 'http'
import { ReactServerMiddlewareOptions } from './interface.js'

export const handleOnShellReady = (
    req: IncomingMessage,
    res: ServerResponse,
    options: ReactServerMiddlewareOptions,
    callback?: ReadyCallback,
) => {
    const next = callback?.(req, res)
    const output = `<script type="module">import RefreshRuntime from '/@react-refresh';RefreshRuntime.injectIntoGlobalHook(window);window.$RefreshReg$ = () => {};window.$RefreshSig$ = () => (type) => type;window.__vite_plugin_react_preamble_installed__ = true;</script>`
    return async (pipe: WritableCallback, error?: Error) => {
        if (isFunction(next)) {
            return next(pipe, error)
        }
        res.statusCode = error ? HttpStatusCodes.INTERNAL_SERVER_ERROR : HttpStatusCodes.OK
        res.setHeader('Content-type', 'text/html; charset=UTF-8')
        res.setHeader('Transfer-Encoding', 'chunked')
        if (options.enableDoctypeHeader) {
            res.write('<!DOCTYPE html>')
        }
        res.write(`<html><head><title>${options.title || ''}</title>${output}</head><body>`)
        pipe()
    }
}

export const handleOnAbort = (_req: IncomingMessage, res: ServerResponse) => async (cb?: () => void) => {
    if (isFunction(cb)) {
        cb()
    }
    res.end()
}
