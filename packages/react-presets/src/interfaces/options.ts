import { ComponentType, OnTimeoutHandler, OnErrorHandler, OnReadyHandler, OnFinishEventHandler } from './types.js'

export interface NonceOptions {
    /**
     * A nonce string to allow scripts for script-src Content-Security-Policy.
     *
     * @see {@link https://beta.reactjs.org/reference/react-dom/server/renderToPipeableStream#parameters Read more about the nonce parameter.}
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/script-src Read more about the Content-Security-Policy.}
     */
    nonce?: string
}

export interface ComponentOptions<T extends Record<string, unknown> = Record<string, unknown>> {
    /**
     * The React component to render.
     */
    component?: ComponentType | null
    /**
     * The props to pass to the component.
     */
    props?: T
}

export interface EventHandlers {
    /**
     * A callback will be fired if provided within onAllReady implementation.
     *
     * @see {@link https://beta.reactjs.org/reference/react-dom/server/renderToPipeableStream#parameters Read more about the onAllReady callback.}
     */
    onAllReadyHandler?: OnReadyHandler
    /**
     * A callback will be fired if provided within onShellReady implementation before the stream is piped.
     *
     * @see {@link https://beta.reactjs.org/reference/react-dom/server/renderToPipeableStream#parameters Read more about the onShellReady callback.}
     */
    onShellReadyHandler?: OnReadyHandler
    /**
     * A callback that fires if there was an error rendering the initial shell.
     *
     * @see {@link https://beta.reactjs.org/reference/react-dom/server/renderToPipeableStream#parameters Read more about the onShellError callback.}
     */
    onShellErrorHandler?: OnErrorHandler
    /**
     * A callback that fires whenever there is a server error, whether recoverable or not. By default, this only calls console.error.
     *
     * @see {@link https://beta.reactjs.org/reference/react-dom/server/renderToPipeableStream#parameters Read more about the onError callback.}
     */
    onErrorHandler?: OnErrorHandler
    /**
     * A callback that fires when the stream is finished.
     * @returns A promise that resolves to a string to be written to the stream.
     */
    onFinishEventHandler?: OnFinishEventHandler
    /**
     * A callback that fires when the stream is aborted.
     * @param callback
     * @returns
     */
    onTimeoutEventHandler?: OnTimeoutHandler
}

export interface BootstrapOptions {
    /**
     * Like boostrapScripts.
     *
     * @see {@link https://beta.reactjs.org/reference/react-dom/server/renderToPipeableStream#parameters Read more about the bootstrapScriptContent parameter.}
     * @example
     * Use this to include the <script type="module"> that calls hydrateRoot.
     */
    bootstrapModules?: string[]
    /**
     * An array of string URLs for the <script> tags to emit on the page.
     *
     * @see {@link https://beta.reactjs.org/reference/react-dom/server/renderToPipeableStream#parameters Read more about the bootstrapScripts parameter.}
     * @example
     * Use this to include the <script> that calls hydrateRoot.
     */
    bootstrapScripts?: string[]
    /**
     *  If specified, this string will be placed in an inline script tag.
     *
     *  @see {@link https://beta.reactjs.org/reference/react-dom/server/renderToPipeableStream#parameters Read more about the bootstrapScriptContent parameter.}
     */
    bootstrapScriptContent?: string
}

export interface StreamableOptions<T extends Record<string, unknown> = Record<string, unknown>>
    extends EventHandlers,
        BootstrapOptions,
        NonceOptions,
        ComponentOptions<T> {}

export interface PipeableOptions<T extends Record<string, unknown> = Record<string, unknown>>
    extends BootstrapOptions,
        NonceOptions,
        Omit<ComponentOptions<T>, 'props'> {
    /**
     * A string prefix React uses for IDs generated by useId.
     *
     * @see {@link https://beta.reactjs.org/reference/react-dom/server/renderToPipeableStream#parameters Read more about the identifierPrefix parameter.}
     */
    identifierPrefix?: string
    /**
     * A string with the root namespace URI for the stream. Defaults to regular HTML.
     *
     * @see {@link https://beta.reactjs.org/reference/react-dom/server/renderToPipeableStream#parameters Read more about the namespaceURI parameter.}
     */
    namespaceURI?: string
    /**
     * The number of bytes in a chunk.
     *
     * @see {@link https://github.com/facebook/react/blob/14c2be8dac2d5482fda8a0906a31d239df8551fc/packages/react-server/src/ReactFizzServer.js#L210-L225 Read more about the default heuristic.}
     * @default 12800
     */
    progressiveChunkSize?: number

    /**
     * Enable server rendering to “give up” after a timeout.
     * @default false
     */
    enableTimeout?: boolean
    /**
     * Force the server rendering to “give up” after a timeout
     *
     * @see {@link https://beta.reactjs.org/reference/react-dom/server/renderToPipeableStream#aborting-server-rendering Read more about aborting server rendering.}
     * @default 10000
     */
    timeout?: number
    /**
     * Write closing body and html tags to the end of the stream and end it.
     * @example Writable.end('</body></html>')
     * @default true
     */
    addClosingHtmlBodyTag?: boolean
}
