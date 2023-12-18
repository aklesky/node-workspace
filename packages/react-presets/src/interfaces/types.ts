import type { IncomingMessage, ServerResponse } from 'http'
import { Writable } from 'stream'
export type { ComponentType } from 'react'

export type PipeHandler = () => Writable
export type OnReadyHandler = (pipe: PipeHandler, error?: Error) => Promise<void>
export type OnErrorHandler = (error: unknown, writeable: Writable) => Promise<void>
export type OnTimeoutHandler = (cb?: () => void) => Promise<void>
export type OnFinishEventHandler = () => Promise<string | void>
export type GenericHandler<T = unknown> = (req: IncomingMessage, res: ServerResponse) => T
