import { isFunction } from '@aklesky/utilities/asserts/function.js'
import { isString } from '@aklesky/utilities/asserts/strings.js'
import { Writable } from 'stream'
import { PipeableOptions } from '../interfaces/options.js'
import { OnFinishEventHandler, OnTimeoutHandler } from '../interfaces/types.js'

export const onErrorHandler = (error: Error) => {
    console.error(error)
}

export const onShellErrorHandler = (error: Error, writable: Writable) => {
    writable.end(`[react.onShellError]:${error?.stack}`)
}

export const onFinishEventHandler =
    (config: PipeableOptions, writeable: Writable, cb?: OnFinishEventHandler) => async () => {
        const string = await cb?.()
        if (isString(string)) {
            writeable.write(string)
        }

        if (config.addClosingHtmlBodyTag) {
            writeable.write('</body></html>')
        }
        writeable.end()
    }

export const onTimeoutEventHandler = (
    timeout = 10000,
    abort: () => void,
    writeable: Writable,
    cb?: OnTimeoutHandler,
) => {
    setTimeout(async () => {
        try {
            if (isFunction(cb)) {
                await cb(abort)
                return
            }
            writeable.write('<!-- timeout event has been fired -->')
            abort()
        } catch (e: unknown) {
            console.error('[react.onTimeoutEventHandler]: abort timeout error:', (e as Error).message)
        }
    }, timeout)
}
