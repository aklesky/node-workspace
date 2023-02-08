import { isFunction } from '@aklesky/utilities/asserts/function.js'
import { isString } from '@aklesky/utilities/asserts/strings.js'
import { Writable } from 'stream'
import { PipeableStreamOptions } from '../interfaces/options.js'
import { onAbortCallback, onStreamEndCallback } from '../interfaces/types.js'

export const handleOnError = (error: Error) => {
    console.error(error)
}

export const handleOnShellError = (error: Error, writable: Writable) => {
    writable.end(`[react.onShellError]:${error?.stack}`)
}

export const handleOnFinishEvent =
    (config: PipeableStreamOptions, writeable: Writable, cb?: onStreamEndCallback) => async () => {
        const string = await cb?.()
        if (isString(string)) {
            writeable.end(string)
        }

        if (config.addHtmlBodyTag) {
            writeable.end('</body></html>')
        }
    }

export const handleOnTimeoutEvent = (timeout = 10000, abort: () => void, writeable: Writable, cb?: onAbortCallback) => {
    setTimeout(async () => {
        try {
            if (isFunction(cb)) {
                await cb(abort)
                return
            }
            writeable.write('<!-- onAbort event has been fired -->')
            abort()
        } catch (e: unknown) {
            console.error('[react.onAbort]: abort timeout error:', (e as Error).message)
        }
    }, timeout)
}
