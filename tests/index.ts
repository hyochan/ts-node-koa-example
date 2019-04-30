import * as request from 'supertest';
import app from '../src';

const testServer = request.agent(app);

describe('[index] /', () => {
  it('should GET /', async() => {
    const result = await testServer.get('/');
    expect(result.text).toEqual('Hello World!');
    expect(result.status).toEqual(200);
  });
  afterAll(async(done) => {
    app.close();
    done();
  });
});
