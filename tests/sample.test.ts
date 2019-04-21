import * as request from 'supertest'
import app from '../src'

const testServer = request.agent(app)

describe('[sample] apis', () => {
  it('should GET /sample', async () => {
    const result = await testServer.get('/sample')
    expect(result.text).toEqual('Hello Sample!')
    expect(result.status).toEqual(200)
  })
  afterAll(async (done) => {
    app.close()
    done()
  })
})
