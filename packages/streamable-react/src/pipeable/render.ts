import { isFunction } from '@aklesky/utilities/asserts/function.js'
import { deepmerge } from '@aklesky/utilities/deepmerge.js'
import { HttpStatusCodes } from '@aklesky/utilities/http/codes.js'
import { ServerResponse } from 'http'
import { createElement } from 'react'
import { renderToPipeableStream } from 'react-dom/server'
import { PipeableStreamOptions, StreamableOptions } from '../interfaces/options.js'
import { defaultOptions } from './config.js'
import { handleOnError, handleOnFinishEvent, handleOnShellError, handleOnTimeoutEvent } from './handlers.js'
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
                onAllReady: async () => streamable.onAllReady?.(() => pipe(output), error),
                onError: (err: unknown) => {
                    error = err as Error
                    if (isFunction(streamable.onError)) {
                        streamable.onError(error, output)
                        return
                    }
                    writable.statusCode = HttpStatusCodes.INTERNAL_SERVER_ERROR
                    handleOnError(error)
                },
                onShellError: (error: unknown) => {
                    if (isFunction(streamable.onShellError)) {
                        streamable.onShellError?.(error, writable)
                        return
                    }
                    writable.statusCode = HttpStatusCodes.INTERNAL_SERVER_ERROR
                    handleOnShellError(error as Error, writable)
                },
                onShellReady: async () => streamable.onShellReady?.(() => pipe(output), error) || pipe(output),
            })

            output.on('finish', handleOnFinishEvent(config, writable, streamable.onStreamEnd))

            if (config.enableTimeout) {
                handleOnTimeoutEvent(config.timeout, abort, writable, streamable.onAbort)
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
