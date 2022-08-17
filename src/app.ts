/**
 * @name: app
 * @author: evil
 * @date: 2022-08-15 22:44
 * @description：app
 * @update: 2022-08-15 22:44
 */
import Koa from 'koa';
import json from 'koa-json';
import body from 'koa-body';
import Router from 'koa-router';
import databaseConfig from './config/DatabaseConfig';
import autoLoadRouters from './common/AutoLoadRouters';
import GlobalException from './common/GlobalException';
import ResultCode from './common/ResultCode';

const app: Koa = new Koa();
const router = new Router();
const autoLoadRoutersInstance = autoLoadRouters({
	path: '/src/router',
});
app.use(json());
app.use(body());
app.use(GlobalException);
autoLoadRoutersInstance.init().mountRoutesToRootRouter(router, '/super');
app.use(router.routes());
app.listen(1994);
