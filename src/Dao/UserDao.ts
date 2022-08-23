/**
 * @name: UserDao
 * @author: evil
 * @date: 2022-08-23 22:01
 * @description：UserDao
 * @update: 2022-08-23 22:01
 */
import {model} from '../model/UserInfo';

export type UserInfo = {
	userid: number
	username: string
	psw: string
	address: string
	valid: number
}

class UserDao {
	static addUser(userInfo: UserInfo) {
		return model.create(userInfo);
	}

	// findUserInfo(username: string, password: string) {
	// 	let sql = `select * from userinfo where 1=1`;
	// 	if (!isEmpty(username)) {
	// 		sql += `and username='${username}'`;
	// 	}
	// 	if (!isEmpty(password)) {
	// 		sql += `and psw='${password}'`;
	// 	}
	// 	return baseDao.query<UserInfo[]>(sql);
	// }
}

export const {addUser} = UserDao;
