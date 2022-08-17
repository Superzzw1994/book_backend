/**
 * @name: LogUtil
 * @author: evil
 * @date: 2022-08-17 22:27
 * @description：LogUtil
 * @update: 2022-08-17 22:27
 */
import log4js from 'log4js';

enum levelInfo {
	'trace' = 'trace',
	'debug' = 'debug',
	'info' = 'info',
	'warn' = 'warn',
	'error' = 'error',
	'fatal' = 'fatal'
}

class LogUtil {
	static logUtil: LogUtil = new LogUtil();
	logInstance!: log4js.Logger;

	constructor() {
		this.config();
	}

	config() {
		log4js.configure({
			appenders: {
				console: {
					type: 'console'
				}
			},
			categories: {
				default: {
					appenders: ['console'],
					level: levelInfo.debug
				},
				info: {
					appenders: ['console'],
					level: levelInfo.info
				},
				warn: {
					appenders: ['console'],
					level: levelInfo.warn
				},
			}
		});

	}

	getCategories(level: levelInfo) {
		this.logInstance = log4js.getLogger(level);
	}

	debug(input: string) {
		this.getCategories(levelInfo.debug);
		this.logInstance.debug(input);
	}

	info(input: string) {
		this.getCategories(levelInfo.info);
		this.logInstance.info(input);
	}

	warn(input: string) {
		this.getCategories(levelInfo.warn);
		this.logInstance.warn(input);
	}
}

export default LogUtil.logUtil;
