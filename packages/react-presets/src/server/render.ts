import { isFunction } from '@aklesky/utilities/asserts/function.js'
import { deepmerge } from '@aklesky/utilities/deepmerge.js'
import { StatusCodes } from '@aklesky/utilities/http/codes.js'
import { ServerResponse } from 'http'
import { createElement } from 'react'
import { renderToPipeableStream } from 'react-dom/server'
import { PipeableOptions, StreamableOptions } from '../interfaces/options.js'
import { isValidReactComponent } from '../utils/element.js'
import { defaultOptions } from './config.js'
import { onErrorHandler, onFinishEventHandler, onShellErrorHandler, onTimeoutEventHandler } from './handlers.js'
import { OutputWritable } from './writeable.js'

export const withRenderToPipeableStream = (options: PipeableOptions) => {
    const config = deepmerge(defaultOptions, options || {}) satisfies PipeableOptions
    return async (writable: ServerResponse, opts: StreamableOptions) => {
        try {
            const component = opts.component || config.component

            if (!isValidReactComponent(component)) {
                throw new Error('react component is required, nothing to render.')
            }
            const output = OutputWritable.New(writable)
            let error: Error | undefined

            const { pipe, abort } = renderToPipeableStream(createElement(component, opts?.props), {
                identifierPrefix: config.identifierPrefix,
                namespaceURI: config.namespaceURI,
                nonce: opts.nonce || config.nonce,
                bootstrapScriptContent: opts.bootstrapScriptContent || config.bootstrapScriptContent,
                bootstrapScripts: opts.bootstrapScripts || config.bootstrapScripts,
                bootstrapModules: opts.bootstrapModules || config.bootstrapModules,
                progressiveChunkSize: config.progressiveChunkSize,
                onAllReady: async () => opts.onAllReadyHandler?.(() => pipe(output), error),
                onError: (err: unknown) => {
                    error = err as Error
                    if (isFunction(opts.onErrorHandler)) {
                        opts.onErrorHandler(error, output)
                        return
                    }
                    writable.statusCode = StatusCodes.INTERNAL_SERVER_ERROR
                    onErrorHandler(error)
                },
                onShellError: (err: unknown) => {
                    if (isFunction(opts.onShellErrorHandler)) {
                        opts.onShellErrorHandler?.(err, writable)
                        return
                    }
                    writable.statusCode = StatusCodes.INTERNAL_SERVER_ERROR
                    onShellErrorHandler(error as Error, writable)
                },
                onShellReady: async () => {
                    if (!isFunction(opts.onShellReadyHandler) && !isFunction(opts.onAllReadyHandler)) {
                        pipe(output)
                        return
                    }
                    await opts.onShellReadyHandler?.(() => pipe(output), error)
                },
            })

            output.on('finish', onFinishEventHandler(config, writable, opts.onFinishEventHandler))

            if (config.enableTimeout) {
                onTimeoutEventHandler(config.timeout, abort, writable, opts.onTimeoutEventHandler)
            }

            return {
                pipe,
                abort,
            }
        } catch (e) {
            console.error(e)
            throw e
        }
    }
}

export default withRenderToPipeableStream
