import http from 'http'
import request from 'supertest'
import withIgnoreMatchMiddleware from '../../../http/middlewares/ignore/ignore.js'

const app = http.createServer(
    withIgnoreMatchMiddleware(
        (_, res) => {
            res.end('Hello World')
        },
        [/\.([^.]*?)(?=\?|#|$)/, /\/@[.]*?/],
    ),
)

describe('Ignore Url Middleware Suite', () => {
    it('should ignore url with file extension', async () => {
        const response = await request(app).get('/hello/world.js').expect(404)
        expect(response.body).not.toBe('Hello World')
    })

    it('should ignore url starting with /@', async () => {
        const response = await request(app).get('/@hello').expect(404)
        expect(response.body).not.toBe('Hello World')
    })
    it('should pass to the default handler and recive Hello World', async () => {
        const response = await request(app).get('/test').expect(200)
        expect(response.text).toBe('Hello World')
    })
})
