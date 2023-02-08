import { isFunction } from '@aklesky/utilities/asserts/function.js'
import { deepmerge } from '@aklesky/utilities/deepmerge.js'
import { HttpStatusCodes } from '@aklesky/utilities/http/codes.js'
import { ServerResponse } from 'http'
import { createElement } from 'react'
import { renderToPipeableStream } from 'react-dom/server'
import { PipeableStreamOptions, StreamableOptions } from '../interfaces/options.js'
import { defaultOptions } from './config.js'
import { onErrorHandler, onFinishEventHandler, onShellErrorHandler, onTimeoutEventHandler } from './handlers.js'
import { OutputWritable } from './writeable.js'

export const useRenderToPipeableStream = (options: PipeableStreamOptions) => {
    const config = deepmerge(defaultOptions, options || {}) as PipeableStreamOptions
    return async (writable: ServerResponse, streamable: StreamableOptions) => {
        try {
            const component = streamable.component || config.component

            if (!component) {
                throw new Error('react component is required, nothing to render.')
            }
            const output = OutputWritable.New(writable)
            let error: Error | undefined = undefined

            const { pipe, abort } = renderToPipeableStream(createElement(component, streamable?.props), {
                identifierPrefix: config.identifierPrefix,
                namespaceURI: config.namespaceURI,
                nonce: streamable.nonce || config.nonce,
                bootstrapScriptContent: streamable.bootstrapScriptContent || config.bootstrapScriptContent,
                bootstrapScripts: streamable.bootstrapScripts || config.bootstrapScripts,
                bootstrapModules: streamable.bootstrapModules || config.bootstrapModules,
                progressiveChunkSize: config.progressiveChunkSize,
                onAllReady: async () => streamable.onAllReadyHandler?.(() => pipe(output), error),
                onError: (err: unknown) => {
                    error = err as Error
                    if (isFunction(streamable.onErrorHandler)) {
                        streamable.onErrorHandler(error, output)
                        return
                    }
                    writable.statusCode = HttpStatusCodes.INTERNAL_SERVER_ERROR
                    onErrorHandler(error)
                },
                onShellError: (error: unknown) => {
                    if (isFunction(streamable.onShellErrorHandler)) {
                        streamable.onShellErrorHandler?.(error, writable)
                        return
                    }
                    writable.statusCode = HttpStatusCodes.INTERNAL_SERVER_ERROR
                    onShellErrorHandler(error as Error, writable)
                },
                onShellReady: async () => {
                    if (!isFunction(streamable.onShellReadyHandler) && !isFunction(streamable.onAllReadyHandler)) {
                        pipe(output)
                        return
                    }
                    await streamable.onShellReadyHandler?.(() => pipe(output), error)
                },
            })

            output.on('finish', onFinishEventHandler(config, writable, streamable.onFinishEventHandler))

            if (config.enableTimeout) {
                onTimeoutEventHandler(config.timeout, abort, writable, streamable.onTimeoutEventHandler)
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

export default useRenderToPipeableStream
