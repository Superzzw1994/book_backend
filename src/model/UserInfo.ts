/**
 * @name: UserInfo
 * @author: evil
 * @date: 2022-08-23 22:12
 * @description：UserInfo
 * @update: 2022-08-23 22:12
 */
import {DataTypes} from 'sequelize';
import {sequelize} from '../common/BaseDao';

class UserInfo {

	static createModel() {
		return sequelize.define('userInfo', {
			userid: {
				type: DataTypes.INTEGER,
				field: 'userid',
				primaryKey: true,
				autoIncrement: true
			},
			username: {
				type: DataTypes.STRING(30),
				field: 'username',
				allowNull: false
			},
			psw: {
				type: DataTypes.STRING(20),
				field: 'psw',
				allowNull: false
			},
			address: {
				type: DataTypes.STRING(50),
				field: 'address',
				allowNull: true,
				defaultValue: '没有填写地址'
			},
			valid: {
				type: DataTypes.TINYINT,
				field: 'valid',
				allowNull: true,
				defaultValue: 1
			}
		});
	}
}

export const model = UserInfo.createModel();
