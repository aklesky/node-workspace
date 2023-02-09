import { HttpStatusCodes } from '@aklesky/utilities/http/codes.js'
import express from 'express'
import useRenderToPipeableStream from '../pipeable/render.js'
import mock1 from './mocks/mock.js'
import mock2 from './mocks/mock2.js'
import mock3 from './mocks/mock3.js'
import mock4 from './mocks/mock4.js'

export const app = express()

app.get('/hello-world', (_, res) => {
    res.end('Hello World')
})

const middleware = useRenderToPipeableStream({
    enableTimeout: true,
    bootstrapScriptContent: 'Hi',
    timeout: 500,
    addClosingHtmlBodyTag: false,
})

app.get('/app', async (_, res) => {
    try {
        await middleware(res, {
            component: null,
            bootstrapScriptContent: 'World',
            onFinishEventHandler: async () => {
                res.end()
            },
        })
    } catch (e: unknown) {
        res.statusCode = HttpStatusCodes.INTERNAL_SERVER_ERROR
        res.end((e as Error).message)
    }
})

app.get('/app-null', async (_, res) => {
    try {
        await middleware(res, {
            component: () => null,
            bootstrapScriptContent: 'Hello World',
        })
    } catch (e: unknown) {
        res.statusCode = HttpStatusCodes.INTERNAL_SERVER_ERROR
        res.end((e as Error).message)
    }
})

app.get('/app-error', async (_, res) => {
    try {
        await middleware(res, {
            component: mock1,
            bootstrapScriptContent: 'Hello World',
            onAllReadyHandler: async (_cb, err) => {
                if (err) {
                    res.status(HttpStatusCodes.INTERNAL_SERVER_ERROR)
                    res.end(`<!-- ${err.message}:${err.stack} -->`)
                }
            },
            onFinishEventHandler: async () => {
                res.end()
            },
        })
    } catch (e: unknown) {
        res.statusCode = HttpStatusCodes.INTERNAL_SERVER_ERROR
        res.end((e as Error).message)
    }
})
app.get('/app-error-shell', async (_, res) => {
    try {
        await middleware(res, {
            component: mock2,
            bootstrapScriptContent: 'Hello World',
            onFinishEventHandler: async () => {
                res.end()
            },
        })
    } catch (e: unknown) {
        res.statusCode = HttpStatusCodes.INTERNAL_SERVER_ERROR
        res.end((e as Error).message)
    }
})

app.get('/app-timeout', async (_, res) => {
    try {
        await middleware(res, {
            component: mock3,
            bootstrapScriptContent: 'Hello World',
            onFinishEventHandler: async () => {
                res.end()
            },
        })
    } catch (e: unknown) {
        res.statusCode = HttpStatusCodes.INTERNAL_SERVER_ERROR
        res.end((e as Error).message)
    }
})

app.get('/app-no-timeout', async (_, res) => {
    try {
        await middleware(res, {
            component: mock4,
            bootstrapScriptContent: 'Hello World',
            onFinishEventHandler: async () => {
                res.end()
            },
        })
    } catch (e: unknown) {
        res.statusCode = HttpStatusCodes.INTERNAL_SERVER_ERROR
        res.end((e as Error).message)
    }
})

export default app
