/**
 * @name: GlobalExce
 * @author: evil
 * @date: 2022-08-16 23:58
 * @description：GlobalExce
 * @update: 2022-08-16 23:58
 */
import Koa, {Context, Next} from 'koa';
import logger from './LogUtil';

const globalException = async (ctx: Context, next: Next) => {
	try {
		await next();
	} catch (error: any) {
		const res = error as {
			message: string
		};
		ctx.body = `服务器错误: ${res.message}`;
	}
};

export default globalException;
