import Router from 'koa-router';
import Koa, {Context} from 'koa';

const router = new Router();
router.prefix('/user');

router.get('/test', async (ctx: Koa.Context) => {
	ctx.body = 'user test success';
});
module.exports = router;
