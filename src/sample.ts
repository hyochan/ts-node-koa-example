import * as Router from 'koa-router';

const router = new Router();

router.get('/sample', async(ctx) => {
  ctx.body = 'Hello Sample!';
});

export default router;
