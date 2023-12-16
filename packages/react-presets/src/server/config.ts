import { PipeableStreamOptions } from '../interfaces/options.js'

export const defaultOptions: PipeableStreamOptions = {
    enableTimeout: false,
    timeout: 10000,
    addClosingHtmlBodyTag: true,
}
