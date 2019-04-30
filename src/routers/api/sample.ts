import * as Router from 'koa-router';
import jwt from '../../middlewares/jwt';

const router = new Router();

router.get('/sample', jwt, async(ctx) => {
  ctx.body = 'Hello Sample!';
});

export default router;
