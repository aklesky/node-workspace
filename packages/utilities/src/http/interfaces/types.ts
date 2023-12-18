import http from 'http'

export type NextFunction = (error?: unknown) => void

export type NextMiddleware = (
    req: http.IncomingMessage,
    res: http.ServerResponse,
    next?: NextFunction,
) => Promise<void> | void
