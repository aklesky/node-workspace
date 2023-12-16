import { isEmpty } from './empty.js'

export const isFunction = (value: unknown): value is typeof Function => {
    return !isEmpty(value) && typeof value === 'function'
}
