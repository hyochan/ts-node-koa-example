import * as request from 'supertest';
import app from '../../src';

const testServer = request.agent(app);

describe('[index] apis', () => {
  it('should GET /api fail with there is no valid auth', async() => {
    const result = await testServer.get('/api/sample');
    expect(result.text).toEqual('Authentication Error');
    expect(result.status).toEqual(401);
  });
  afterAll(async(done) => {
    app.close();
    done();
  });
});
