import { IncomingMessage, ServerResponse } from 'http'
import { Writable } from 'stream'
export type { ComponentType } from 'react'

export type WritableCallback = () => Writable
export type AppendCallback = (chunk?: string) => void
export type OnReadyCallback = (pipe: WritableCallback, error?: Error) => Promise<void>
export type OnErrorCallback = (error: unknown, writeable: Writable) => Promise<void>
export type onAbortCallback = (cb?: () => void) => Promise<void>
export type ReadyCallback = (req: IncomingMessage, res: ServerResponse) => OnReadyCallback
export type onStreamEndCallback = () => Promise<string | void>
