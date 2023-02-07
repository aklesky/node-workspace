import { IncomingMessage, ServerResponse } from 'http'
import { OutputWritable } from '../pipeable/writeable.js'
export type { ComponentType } from 'react'

export type WritableCallback = () => OutputWritable
export type AppendCallback = (chunk?: string) => void
export type OnReadyCallback = (cb: WritableCallback, append: AppendCallback, error?: Error) => Promise<void>
export type OnErrorCallback = (error: unknown) => Promise<void>
export type onAbortCallback = (cb?: () => void) => Promise<void>
export type ReadyCallback = (req: IncomingMessage, res: ServerResponse) => OnReadyCallback
export type onStreamEndCallback = () => Promise<string | void>
