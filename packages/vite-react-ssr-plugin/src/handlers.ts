import { AppendCallback, ReadyCallback, WritableCallback } from '@aklesky/streamable-react/interfaces/types.js'
import { isFunction } from '@aklesky/utilities/asserts/function.js'
import { HttpStatusCodes } from '@aklesky/utilities/http/codes.js'
import { IncomingMessage, ServerResponse } from 'http'

export const onShellReady = (req: IncomingMessage, res: ServerResponse, callable?: ReadyCallback) => {
    const callback = callable?.(req, res)
    const output = `<script type="module">import RefreshRuntime from '/@react-refresh';RefreshRuntime.injectIntoGlobalHook(window);window.$RefreshReg$ = () => {};window.$RefreshSig$ = () => (type) => type;window.__vite_plugin_react_preamble_installed__ = true;</script>`
    return async (cb: WritableCallback, append: AppendCallback, error?: Error) => {
        if (isFunction(callback)) {
            return callback(
                cb,
                (chunk?: string) => {
                    append?.(output)
                    append?.(chunk)
                },
                error,
            )
        }
        res.statusCode = error ? HttpStatusCodes.INTERNAL_SERVER_ERROR : HttpStatusCodes.OK
        res.setHeader('Content-type', 'text/html; charset=UTF-8')
        res.setHeader('Transfer-Encoding', 'chunked')
        res.write('<!DOCTYPE html>')
        append?.(`<html><head><title>Vite.js React Server Side Plugin</title>${output}</head>`)
        cb?.()
    }
}

export const onAbort = (_req: IncomingMessage, res: ServerResponse) => async (callback?: Function) => {
    if (isFunction(callback)) {
        callback()
    }
    res.end()
}
