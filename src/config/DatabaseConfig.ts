/**
 * @name: DatabaseConfig
 * @author: evil
 * @date: 2022-08-17 22:49
 * @description：DatabaseConfig
 * @update: 2022-08-17 22:49
 */
interface DatabaseConnectConfig {
	host: string,
	user: string,
	password: string,
	port: number,
	database: string
}

interface EnvConfig {
	dev: DatabaseConnectConfig,
	prod: DatabaseConnectConfig
}

class DatabaseConfig {
	static config: DatabaseConfig = new DatabaseConfig();
	env!: keyof EnvConfig;
	envConfig!: EnvConfig;

	constructor() {
		this.env = process.env.NODE_ENV === 'dev' ? 'dev' : 'prod';
		this.init();
	}

	init() {
		this.envConfig = {
			dev: {
				host: 'localhost',
				user: 'zzw1994529',
				password: 'shzx1994529',
				database: 'dangdang',
				port: 3306
			},
			prod: {
				host: 'localhost',
				user: 'zzw1994529',
				password: 'shzx1994529',
				database: 'dangdang',
				port: 3306
			}
		};
	}

	getConfig(): DatabaseConnectConfig;
	getConfig(key: keyof DatabaseConnectConfig): string;
	getConfig(data: any = ''): any {
		if (this.isKeyInDatabaseConnectConfig(data) && data.length > 0) {
			return this.envConfig[this.env][data];
		} else {
			return this.envConfig[this.env];
		}
	}


	isKeyInDatabaseConnectConfig(key: any): key is keyof DatabaseConnectConfig {
		return key === 'host' || key === 'user' || key === 'password' || key === 'port' || key === 'database';
	}
}

export default DatabaseConfig.config;
