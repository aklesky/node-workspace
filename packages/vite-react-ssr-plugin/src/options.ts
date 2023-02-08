import { ReactServerMiddlewareOptions } from './interface.js'

export const defaultOptions: Partial<ReactServerMiddlewareOptions> = {
    bootstrapModules: ['/@vite/client'],
    ignoreUrlExpressions: [/\.([^.]*?)(?=\?|#|$)/, /\/@[.]*?/],
    enableDoctypeHeader: true,
    title: 'Vite.js React Server Side Plugin',
}

export default defaultOptions
