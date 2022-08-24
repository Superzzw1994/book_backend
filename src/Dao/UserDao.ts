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
type prop = keyof UserInfo

interface IProps {
	[key: prop]: string;
}

class UserDao {
	static addUser(userInfo: UserInfo) {
		return model.create(userInfo);
	}

	IProps;
	[];

	return<model>

	static findAllUsers() {
		return model.findAll({
			raw: true
		});
	}

) {

	static findUserProps(attributes: FindAttributeOptions) {
		return model.findAll({
			raw: true,
			attributes
		});
	}

	static findUserByProps(props: object

.

	findOne({
						raw: true,
						where: {
							[Op.or]: props
						}
					});
}
}

export const {addUser, findAllUsers, findUserProps, findUserByProps} = UserDao;
