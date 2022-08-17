import path from 'path';
import fs from 'fs';
import Router from 'koa-router';
import {AutoLoadRoutersConfig} from '@/types/common';

class AutoLoadRouters {
	// 单例
	static privateInstance ?: AutoLoadRouters;
	static autoLoadRouter = (config?: AutoLoadRoutersConfig): AutoLoadRouters => {
		if (this.privateInstance) {
			return this.privateInstance;
		} else {
			this.privateInstance = new AutoLoadRouters(config);
			return this.privateInstance;
		}
	};
	// 路由文件路径
	prefix?: string;
	// 路由文件
	routes: Router[] = [];

	constructor(options?: AutoLoadRoutersConfig) {
		this.prefix = options?.path;
	}

	init() {
		const files = this.getFiles(this.prefix || '');
		this.readRouterFile(files);
		return AutoLoadRouters.autoLoadRouter();
	}

	getFiles(prefix: string) {
		const routersPath = path.join(process.cwd(), prefix);
		const files = fs.readdirSync(routersPath);
		return this.getFilesAbsolutePaths(files, routersPath);
	}

	getFilesAbsolutePaths(files: string[], prefixPath: string = '') {
		let fullFilePath: string[] = [];
		for (let file of files) {
			fullFilePath.push(`${prefixPath}/${file}`);
		}
		return fullFilePath;
	}

	readRouterFile(filesPath: string[]) {
		for (let filePath of filesPath) {
			const module = require(filePath);
			if (this.isKoaRouter(module)) {
				this.routes.push(module);
			}
		}
	}

	mountRoutesToRootRouter(router: Router, prefix: string = '') {
		router.prefix(prefix);
		this.routes.forEach(route => {
			router.use(route.routes(), route.allowedMethods());
		});
		return router;
	}

	// 类型守卫
	isKoaRouter(module: any): module is Router {
		return module instanceof Router;
	}
}

export default AutoLoadRouters.autoLoadRouter;
