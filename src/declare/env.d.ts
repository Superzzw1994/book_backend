/**
 * @name: env.d.
 * @author: evil
 * @date: 2022-08-24 23:13
 * @description：env.d.
 * @update: 2022-08-24 23:13
 */

declare module 'Koa' {
	export interface Context {
		params: {
			[key: string]: any
		};
	}
}
