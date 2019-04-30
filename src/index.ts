import * as Koa from 'koa';
import * as Router from 'koa-router';

import PublicRouter from './routers/public';
import ApiRouter from './routers/api';
import cors = require('@koa/cors');

const app = new Koa();
app.use(cors());

const router = new Router();
router.get('/', async(ctx) => {
  ctx.body = 'Hello World!';
});

app.use(router.routes());
app.use(ApiRouter.routes());
app.use(PublicRouter.routes());

export default app.listen(3000);

console.log('Server running on port 3000');
