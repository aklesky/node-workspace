import { BootstrapOptions, PipeableStreamOptions } from '@aklesky/streamable-react/interfaces/options.js'
import {
    ComponentType,
    onAbortCallback,
    OnErrorCallback,
    OnReadyCallback,
    onStreamEndCallback,
} from '@aklesky/streamable-react/interfaces/types.js'
import type { IncomingMessage, ServerResponse } from 'http'
import { UserConfig } from 'vite'

export type GenericHandler<T = unknown> = (req: IncomingMessage, res: ServerResponse) => T

export interface ReactServerMiddlewareEvents extends PipeableStreamOptions, Omit<BootstrapOptions, 'bootstrapModules'> {
    onAllReady?: GenericHandler<OnReadyCallback>
    onShellReady?: GenericHandler<OnReadyCallback>
    onShellError?: GenericHandler<OnErrorCallback>
    onError?: GenericHandler<OnErrorCallback>
    onStreamEnd?: GenericHandler<onStreamEndCallback>
    onAbort?: GenericHandler<onAbortCallback>
}

export interface ReactServerMiddlewareOptions extends ReactServerMiddlewareEvents {
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
}

export interface ReactServerMiddlewareConfig extends Omit<ReactServerMiddlewareOptions, 'entry'> {
    getEntry: () => Promise<ComponentType>
    getEntryProps?: GenericHandler<Promise<Record<string, unknown>>>
    timeout?: number
}

export interface ViteUserConfig {
    /**
     * @description vite user configuration
     */
    vite: UserConfig
    /**
     *  @description react server middleware configuration
     */
    react?: ReactServerMiddlewareOptions
}
