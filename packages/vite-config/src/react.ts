/**
 * default import doesn't work with tsconfig.moduleResultion: NodeNext
 * @version @vitejs/plugin-react-swc@3.1.0
 */
import plugin from '@vitejs/plugin-react-swc'
export type Options = {
    /**
     * Control where the JSX factory is imported from.
     * @default "react"
     */
    jsxImportSource?: string
    /**
     * Enable TypeScript decorators. Requires experimentalDecorators in tsconfig.
     * @default false
     */
    tsDecorators?: boolean
    /**
     * Use SWC plugins. Enable SWC at build time.
     * @default undefined
     */
    plugins?: [string, Record<string, any>][]
}

export const react = (options?: Options) => {
    const _default = plugin.default || plugin

    return _default(options)
}
