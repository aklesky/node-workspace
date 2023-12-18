import { ComponentType, createElement } from 'react'
import { Root, hydrateRoot } from 'react-dom/client'
import { isValidReactComponent } from '../utils/element.js'

export const hydrateApp = (id: string, component?: ComponentType, props?: Record<string, unknown>): Root => {
    if (!id) {
        throw new Error('no element id provided')
    }
    const container = document.getElementById(id)
    if (!container) {
        throw new Error(`root element with #${id} not found`)
    }

    if (!isValidReactComponent(component)) {
        throw new Error(`element cannot be rendered in #${id}`)
    }
    const element = createElement(component, props)
    return hydrateRoot(container, element)
}

export default hydrateApp
