/**
 * @name: app
 * @author: evil
 * @date: 2022-08-15 22:44
 * @description：app
 * @update: 2022-08-15 22:44
 */
import Koa from 'koa';
import body from 'koa-body';
import json from 'koa-json';
import Router from 'koa-router';
import autoLoadRouters from './common/AutoLoadRouters';

const app = new Koa();
const router = new Router();
const autoLoadRoutersInstance = autoLoadRouters({
	path: '/src/router',
});
autoLoadRoutersInstance.init().mountRoutesToRootRouter(router, '/super');
app.use(router.routes());
app.listen(1994);
