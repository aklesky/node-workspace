import { BootstrapOptions, PipeableOptions } from './options.js'
import {
    ComponentType,
    GenericHandler,
    OnErrorHandler,
    OnFinishEventHandler,
    OnReadyHandler,
    OnTimeoutHandler,
} from './types.js'

export interface ReactMiddlewareEvents
    extends Omit<PipeableOptions, 'component' | 'props'>,
        Omit<BootstrapOptions, 'bootstrapModules'> {
    onAllReadyHandler?: GenericHandler<OnReadyHandler>
    onShellReadyHandler?: GenericHandler<OnReadyHandler>
    onShellErrorHandler?: GenericHandler<OnErrorHandler>
    onErrorHandler?: GenericHandler<OnErrorHandler>
    onFinishEventHandler?: GenericHandler<OnFinishEventHandler>
    onTimeoutHandler?: GenericHandler<OnTimeoutHandler>
}

export interface ReactMiddlewareOptions extends ReactMiddlewareEvents {
    /**
     * Like boostrapScripts.
     *
     * @see {@link https://beta.reactjs.org/reference/react-dom/server/renderToPipeableStream#parameters Read more about the bootstrapScriptContent parameter.}
     * @example
     * Use this to include the <script type="module"> that calls hydrateRoot.
     * @default
     * bootstrapModules: ['/@vite/client']
     */
    bootstrapModules?: string[]
    /**
     * @description used and loaded by vite.server.ssrLoadModule
     * @example
     * entry: "./entries/main.tsx"
     * await server.ssrLoadModule(entry)
     */
    entry: string
    /**
     * Regex expressions to ignore in the url
     *
     * @default
     * [/\.([^.]*?)(?=\?|#|$)/, /\/\@[.]*?/]
     */
    ignoreUrlExpressions?: RegExp[]
    /**
     * @description Enabling this will add a \<!DOCTYPE html\> to the response
     * @default true
     */
    enableDoctypeHeader?: boolean
    /**
     * @default <title>Vite.js React Server Side Plugin</title>
     */
    title?: string
}

export interface ReactMiddlewareConfig
    extends Omit<ReactMiddlewareOptions, 'entry'>,
        Pick<PipeableOptions, 'enableTimeout' | 'timeout' | 'addClosingHtmlBodyTag'> {
    getEntry: () => Promise<ComponentType>
    getEntryProps?: GenericHandler<Promise<Record<string, unknown>>>
}
