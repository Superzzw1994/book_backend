import Router from 'koa-router';
import {Context} from 'koa';
import logger from '../common/LogUtil';
import {addUser, UserInfo} from '../Dao/UserDao';
import {success} from '../common/ResultCode';

const router = new Router();
router.prefix('/user');

router.post('/addUser', async (ctx: Context) => {
	logger.info('进入路由');
	const userInfo: UserInfo = ctx.request.body;
	const data = await addUser(userInfo);
	ctx.body = success(data);
});
module.exports = router;
