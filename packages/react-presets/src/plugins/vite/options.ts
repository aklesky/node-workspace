import { ReactMiddlewareOptions } from '../../interfaces/server.js'

export const defaultOptions: Partial<ReactMiddlewareOptions> = {
    bootstrapModules: ['/@vite/client'],
    ignoreUrlExpressions: [/\.([^.]*?)(?=\?|#|$)/, /\/@[.]*?/],
    enableDoctypeHeader: true,
    title: 'Vite.js React Server Side Plugin',
    addClosingHtmlBodyTag: true,
    enableTimeout: true,
}

export default defaultOptions
