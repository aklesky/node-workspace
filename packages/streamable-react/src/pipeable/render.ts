import { isFunction } from '@aklesky/utilities/asserts/function.js'
import { isString } from '@aklesky/utilities/asserts/strings.js'
import { deepmerge } from '@aklesky/utilities/deepmerge.js'
import { ServerResponse } from 'http'
import { createElement } from 'react'
import { renderToPipeableStream } from 'react-dom/server'
import { PipeableStreamOptions, StreamableOptions } from '../interfaces/options.js'
import { defaultOptions } from './config.js'
import { OutputWritable } from './writeable.js'
import { HttpStatusCodes } from '@aklesky/utilities/http/codes.js'

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
                onAllReady: async () =>
                    streamable.onAllReady?.(
                        () => pipe(output),
                        (chunk?: string) => output.append(chunk),
                        error,
                    ),
                onError: (err: unknown) => {
                    error = err as Error
                    console.error(error)
                    streamable.onError?.(error)
                    if (!isFunction(streamable.onAllReady)) {
                        writable.statusCode = HttpStatusCodes.INTERNAL_SERVER_ERROR
                        output.end(`[react.onError]:${(err as Error).stack}`)
                    }
                },
                onShellError: async (error: unknown) => {
                    writable.statusCode = HttpStatusCodes.INTERNAL_SERVER_ERROR
                    streamable.onShellError?.(error)
                    writable.end(`[react.onShellError]:${(error as Error).stack}`)
                },
                onShellReady: async () =>
                    streamable.onShellReady?.(
                        () => pipe(output),
                        (chunk?: string) => output.append(chunk),
                        error,
                    ) || pipe(output),
            })

            output.on('finish', async () => {
                const string = await streamable.onStreamEnd?.()
                if (!config.end && isString(string)) {
                    writable.write(string)
                }
                if (config.end) {
                    writable.end(`${string || ''}</body></html>`)
                }
            })

            setTimeout(async () => {
                try {
                    if (isFunction(streamable.onAbort)) {
                        await streamable.onAbort(abort)
                        return
                    }
                    abort()
                } catch (e: unknown) {
                    console.error('[react.onAbort]: abort timeout error:', (e as Error).message)
                }
            }, config.timeout || 10000)

            return {
                pipe,
                abort,
            }
        } catch (e) {
            throw e
        }
    }
}

export default useRenderToPipeableStream
