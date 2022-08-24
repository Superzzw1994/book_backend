import Router from 'koa-router';
import {Context} from 'koa';
import logger from '../common/LogUtil';
import {addUser, findAllUsers, findUserByProps, findUserProps, UserInfo} from '../Dao/UserDao';
import {success} from '../common/ResultCode';
import {FindAttributeOptions} from 'sequelize';

const router = new Router();
router.prefix('/user');

router.post('/addUser', async (ctx: Context) => {
	logger.info('进入路由');
	const userInfo: UserInfo = ctx.request.body;
	const data = await addUser(userInfo);
	ctx.body = success(data);
});

router.get('/findAll', async (ctx: Context) => {
	logger.info('查询用户');
	const users = await findAllUsers();
	ctx.body = users;
});

router.post('/findUsersProps', async (ctx: Context) => {
	const attributes: FindAttributeOptions = ctx.request.body;
	ctx.body = success(await findUserProps(attributes));
});

router.get('/findUserByProps/:username/:password', async (ctx: Context) => {
	const {username = '', password = ''} = ctx.params;
	ctx.body = success(await findUserByProps([
		{
			username: username as string
		},
		{
			psw: password
		}
	]));
});
module.exports = router;
