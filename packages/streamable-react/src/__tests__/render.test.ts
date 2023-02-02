import request from 'supertest'
import express from 'express'
import mock1 from './mocks/mock.js'
import mock2 from './mocks/mock2.js'
import useRenderToPipeableStream from '../pipeable/render.js'
const app = express()

app.get('/hello-world', (_, res) => {
    res.end('Hello World')
})

const middleware = useRenderToPipeableStream({
    bootstrapScriptContent: 'Hi',
    timeout: 1000,
    end: false,
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
        res.statusCode = 500
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
        res.statusCode = 500
        res.end((e as Error).message)
    }
})

app.get('/app-error', async (_, res) => {
    try {
        await middleware(res, {
            component: mock1,
            bootstrapScriptContent: 'Hello World',
            onAllReady: async (_cb, _, err) => {
                console.log('error happened ?', err)
                if (err) {
                    res.status(500)
                    res.end(`<!-- ${err.message}:${err.stack} -->`)
                }
            },
            onStreamEnd: async () => {
                res.end()
            },
        })
    } catch (e: unknown) {
        res.statusCode = 500
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
        res.statusCode = 500
        res.end((e as Error).message)
    }
})

describe('React Rendering Test Suite: Error Handling', () => {
    it('should return status code 200 and Hello World', async () => {
        const response = await request(app).get('/hello-world').expect(200)

        expect(response.text).toBe('Hello World')
    })
    it('should return status code 500 and error message: react component is required, nothing to render.', async () => {
        jest.setTimeout(10000)
        const response = await request(app).get('/app').expect(500)

        expect(response.text).toContain('react component is required, nothing to render.')
    })
    it('should return status code 200 and <script>Hello World</script>', async () => {
        const response = await request(app).get('/app-null').expect(200)

        expect(response.text).toContain('<script>Hello World</script>')
    })
    it('should return status code 500 and Cannot read properties of undefined', async () => {
        const response = await request(app).get('/app-error-shell').expect(500)

        expect(response.text).toContain('Cannot read properties of undefined')
    })
})
