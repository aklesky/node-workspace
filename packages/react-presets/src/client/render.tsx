import { Root, createRoot } from 'react-dom/client'
import { isValidReactComponent } from '../utils/element.js'
import { ComponentType, createElement } from 'react'

export const renderApp = (id: string, component?: ComponentType, props?: Record<string, unknown>): Root => {
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
    const root = createRoot(container)
    root.render(element)
    return root
}
