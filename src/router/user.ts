import Router from 'koa-router';
import Koa, {Context} from 'koa';
import logger from '../common/LogUtil';

const router = new Router();
router.prefix('/user');

router.get('/test', async (ctx: Context) => {
	logger.info('进入路由');
	ctx.body = 'user test success';
});
module.exports = router;
