import plugin from '@vitejs/plugin-react-swc'
import { ReactViteOptions } from './interfaces.js'

export const withReactPlugin = (options?: ReactViteOptions) => {
    return plugin(options)
}

export default withReactPlugin
