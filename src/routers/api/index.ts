import * as Router from 'koa-router';
import SampleRoute from './sample';

const router = new Router();

router.get('/api', async(ctx) => {
  ctx.body = 'Hello Api!';
});
router.use('/api', SampleRoute.routes());

export default router;
