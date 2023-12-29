import { ReactElement, isValidElement } from 'react'

const isReactObject = (element: any, symbolType: symbol): boolean => {
    return typeof element === 'object' && element !== null && element.$$typeof === symbolType
}

export const isValidReactComponent = (element: unknown): element is ReactElement => {
    if (!element) {
        return false
    }

    if (isValidElement(element) || typeof element === 'function') {
        return true
    }

    return isReactObject(element, Symbol.for('react.memo')) || isReactObject(element, Symbol.for('react.lazy'))
}
