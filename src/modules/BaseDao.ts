/**
 * @name: BaseDao
 * @author: evil
 * @date: 2022-08-23 21:53
 * @description：BaseDao
 * @update: 2022-08-23 21:53
 */
import path from 'path';
import mysql, {Connection} from 'mysql';
import databaseConfig from '../config/DatabaseConfig';
import {Dialect} from 'sequelize';
import {Sequelize} from 'sequelize-typescript';

class BaseDao {
	static baseDao: BaseDao = new BaseDao();
	con !: Connection;
	sequelize !: Sequelize;

	constructor() {
		this.init('mysql');
	}

	async connect() {
		this.con = await mysql.createConnection(databaseConfig.getConfig());
	}

	async query<T>(sql: string) {
		return new Promise((resolve, reject) => {
			this.con.query(sql, (err, res: T) => {
				if (err) {
					reject(err);
				} else {
					resolve(res);
				}
			});
		});
	}

	init(dialect: Dialect) {
		const {password, port, user, host, database} = databaseConfig.getConfig();
		this.sequelize = new Sequelize(database, user, password, {
			host,
			port,
			dialect: dialect || 'mysql',
			define: {
				timestamps: false,
				freezeTableName: true
			},
			pool: {
				max: 300,
				min: 50,
				idle: 10000,
				acquire: 1000
			}
		});
	}

	addModels() {
		const ormModelPath = path.join(process.cwd() + '/src/modules/ormModel');
		this.sequelize.addModels([ormModelPath]);
	}
}

const baseDao = BaseDao.baseDao;
baseDao.addModels();
export const {sequelize} = baseDao;
