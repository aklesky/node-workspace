import { ReactElement, isValidElement } from 'react'

export const isValidReactComponent = (element: unknown): element is ReactElement => {
    if (!element) {
        return false
    }

    return isValidElement(element) || typeof element === 'function'
}
