import { isEmpty } from './empty.js'

export const isString = (value: unknown): value is string => {
    return !isEmpty(value) && (typeof value === 'string' || Object.prototype.toString.call(value) === '[object String]')
}
