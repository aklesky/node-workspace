import { isFunction } from '@aklesky/utilities/asserts/function.js'
import { Writable } from 'stream'

export class OutputWritable extends Writable {
    constructor(
        private readonly _writable: Writable,
        private readonly cb?: () => Promise<string>,
    ) {
        super()
    }
    async _write(
        chunk: Buffer,
        encoding: BufferEncoding,
        callback: (error?: Error | null | undefined) => void,
    ): Promise<void> {
        if (isFunction(this.cb)) {
            const data = await this.cb()
            this._writable.write(chunk)
            this._writable.write(data, encoding, callback)
            return
        }
        this._writable.write(chunk, encoding, callback)
    }

    public static New(writable: Writable, cb?: () => Promise<string>): OutputWritable {
        return new OutputWritable(writable, cb)
    }
}
