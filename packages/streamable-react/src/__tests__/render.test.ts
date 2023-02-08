import { HttpStatusCodes } from '@aklesky/utilities/http/codes.js'
import express from 'express'
import request from 'supertest'
import useRenderToPipeableStream from '../pipeable/render.js'
import mock1 from './mocks/mock.js'
import mock2 from './mocks/mock2.js'
import mock3 from './mocks/mock3.js'
import mock4 from './mocks/mock4.js'

const app = express()

app.get('/hello-world', (_, res) => {
    res.end('Hello World')
})

const middleware = useRenderToPipeableStream({
    enableTimeout: true,
    bootstrapScriptContent: 'Hi',
    timeout: 5000,
    addHtmlBodyTag: false,
})

app.get('/app', async (_, res) => {
    try {
        await middleware(res, {
            component: null,
            bootstrapScriptContent: 'World',
            onStreamEnd: async () => {
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
            onStreamEnd: async () => {
                res.end()
            },
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
            onAllReady: async (_cb, err) => {
                if (err) {
                    res.status(HttpStatusCodes.INTERNAL_SERVER_ERROR)
                    res.end(`<!-- ${err.message}:${err.stack} -->`)
                }
            },
            onStreamEnd: async () => {
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
            onStreamEnd: async () => {
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
            onStreamEnd: async () => {
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
            onStreamEnd: async () => {
                res.end()
            },
        })
    } catch (e: unknown) {
        res.statusCode = HttpStatusCodes.INTERNAL_SERVER_ERROR
        res.end((e as Error).message)
    }
})

describe('React Rendering Test Suite: Error Handling', () => {
    it('should return status code 200 and Hello World', async () => {
        const response = await request(app).get('/hello-world').expect(HttpStatusCodes.OK)

        expect(response.text).toBe('Hello World')
    })
    it('should return status code 500 and error message: react component is required, nothing to render.', async () => {
        jest.setTimeout(10000)
        const response = await request(app).get('/app').expect(HttpStatusCodes.INTERNAL_SERVER_ERROR)

        expect(response.text).toContain('react component is required, nothing to render.')
    })
    it('should return status code 200 and <script>Hello World</script>', async () => {
        const response = await request(app).get('/app-null').expect(HttpStatusCodes.OK)

        expect(response.text).toContain('<script>Hello World</script>')
    })
    it('should return status code 500 and Cannot read properties of undefined', async () => {
        const response = await request(app).get('/app-error-shell').expect(HttpStatusCodes.INTERNAL_SERVER_ERROR)

        expect(response.text).toContain('Cannot read properties of undefined')
    })

    it('should abort the stream and write the output', async () => {
        const response = await request(app).get('/app-timeout').expect(HttpStatusCodes.OK)

        expect(response.text).toContain('<!-- onAbort event has been fired -->')
    })
    it('should not fire abort the stream', async () => {
        const response = await request(app).get('/app-no-timeout').expect(HttpStatusCodes.OK)

        expect(response.text).not.toContain('<!-- onAbort event has been fired -->')
    })
})
