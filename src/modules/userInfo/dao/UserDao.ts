/**
 * @name: UserDao
 * @author: evil
 * @date: 2022-08-23 22:01
 * @description：UserDao
 * @update: 2022-08-23 22:01
 */
import {model} from '../model/UserInfo';
import {FindAttributeOptions, Op} from 'sequelize';

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

	static findAllUsers() {
		return model.findAll({
			raw: true
		});
	}


	static findUserProps(attributes: FindAttributeOptions) {
		return model.findAll({
			raw: true,
			attributes
		});
	}

	static findUserByProps(props: {
		[key in keyof UserInfo]?: string
	}[]) {
		return model.findOne({
			raw: true,
			where: {
				[Op.or]: props
			}
		});
	}

	static findUserByLike() {
		return model.findAll({
			raw: true,
			where: {
				username: {
					[Op.like]: '郑%'
				}
			}
		});
	}
}

export const {addUser, findAllUsers, findUserProps, findUserByProps, findUserByLike} = UserDao;
