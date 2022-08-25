/**
 * @name: UserInfo
 * @author: evil
 * @date: 2022-08-25 13:20
 * @description：UserInfo
 * @update: 2022-08-25 13:20
 */
import {Column, Model, Table} from 'sequelize-typescript';
import {DataTypes} from 'sequelize';


@Table({
	tableName: 'userInfo'
})
class UserInfoModel extends Model<UserInfoModel> {
	@Column({
		type: DataTypes.INTEGER,
		primaryKey: true,
		autoIncrement: true
	})
	userid!: number;

	@Column({
		type: DataTypes.STRING(30),
		field: 'username',
		allowNull: false
	})
	username!: string;

	@Column({
		type: DataTypes.STRING(20),
		field: 'psw',
		allowNull: false
	})
	psw!: string;

	@Column({
		type: DataTypes.STRING(50),
		field: 'address',
		allowNull: true,
		defaultValue: '没有填写地址'
	})
	address!: string;

	@Column({
		type: DataTypes.TINYINT,
		field: 'valid',
		allowNull: true,
		defaultValue: 1
	})
	valid!: number;

}

export default UserInfoModel;
