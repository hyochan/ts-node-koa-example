import * as request from 'supertest';
import app from '../../src';

const testServer = request.agent(app);

describe('[index] public', () => {
  it('should GET /public', async() => {
    const result = await testServer.get('/public');
    expect(result.text).toEqual('Hello Public!');
    expect(result.status).toEqual(200);
  });
  afterAll(async(done) => {
    app.close();
    done();
  });
});
