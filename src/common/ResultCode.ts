/**
 * @name: ResultCode
 * @author: evil
 * @date: 2022-08-17 00:10
 * @description：ResultCode
 * @update: 2022-08-17 00:10
 */
enum Code {
	SUCCESS = 200,
	SERVERERROR = 500
}

class ResultCode {
	static success(data: any, msg: any = '') {
		return {
			data,
			msg,
			code: Code.SUCCESS
		};
	}

	static fail(msg: any = '') {
		return {
			data: undefined,
			msg,
			code: Code.SERVERERROR
		};
	}
}

export default ResultCode;
