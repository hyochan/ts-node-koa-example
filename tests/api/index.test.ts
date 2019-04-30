import * as request from 'supertest';
import app from '../../src';

const testServer = request.agent(app);

describe('[index] api', () => {
  it('should GET /api', async() => {
    const result = await testServer.get('/api');
    expect(result.text).toEqual('Hello Api!');
    expect(result.status).toEqual(200);
  });
  afterAll(async(done) => {
    app.close();
    done();
  });
});
