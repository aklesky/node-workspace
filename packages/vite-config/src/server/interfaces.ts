// import { ReactServerMiddlewareOptions } from '@aklesky/vite-react-ssr-plugin/interface.js'
import { UserConfig } from 'vite'

export interface ViteUserConfig {
    /**
     * @description vite user configuration
     */
    vite: UserConfig
    /**
     *  @description react server middleware configuration
     */
    // react: ReactServerMiddlewareOptions
}
