/**
 * @name: BaseDao
 * @author: evil
 * @date: 2022-08-23 21:53
 * @description：BaseDao
 * @update: 2022-08-23 21:53
 */
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
			}
		});
	}
}

export const {sequelize} = BaseDao.baseDao;
