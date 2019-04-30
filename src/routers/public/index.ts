import * as Router from 'koa-router';

const router = new Router();

router.get('/public', async(ctx) => {
  ctx.body = 'Hello Public!';
});
// router.use('/public', router.routes());

export default router;
