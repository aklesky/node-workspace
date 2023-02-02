import { isFunction } from '../../../asserts/function.js'
import { NextMiddleware } from '../../interfaces/types.js'
import matcher from './match.js'

export const useIgnoreMatchMiddleware = (fn: NextMiddleware, expressions: RegExp[]): NextMiddleware => {
    const match = matcher(expressions)
    return async (req, res, next) => {
        try {
            if (match(req.url)) {
                if (isFunction(next)) {
                    return next()
                }
                res.statusCode = 404
                res.end()
                return
            }
            return fn(req, res, next)
        } catch (e) {
            if (isFunction(next)) {
                return next(e)
            }
            res.statusCode = 500
            res.end()
        }
    }
}

export default useIgnoreMatchMiddleware
