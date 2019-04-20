import * as Koa from 'koa';
import * as Router from 'koa-router';

import SampleRouter from './sample';

const app = new Koa();
const router = new Router();

router.get('/*', async (ctx) => {
  ctx.body = 'Hello World!';
});

app.use(SampleRouter.routes());
app.use(router.routes());

export default app.listen(3000);

console.log('Server running on port 3000');

