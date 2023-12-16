import { HttpStatusCodes } from '@aklesky/utilities/http/codes.js'
import request from 'supertest'
import app from './setup.js'

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
        expect(response.text).not.toContain('</body></html>')
    })
    it('should return status code 500 and Cannot read properties of undefined', async () => {
        const response = await request(app).get('/app-error-shell').expect(HttpStatusCodes.INTERNAL_SERVER_ERROR)

        expect(response.text).toContain('Cannot read properties of undefined')
    })
})
