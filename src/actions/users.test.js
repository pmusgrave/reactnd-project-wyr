import { receiveUsers, RECEIVE_USERS } from './users';
import * as data from '../utils/_DATA';

describe('receiveUsers action', () => {
	describe('valid argument', () => {
		it('should return SET_AUTHED_USER action with id from argument', async () => {
			let userList = await data._getUsers();
			const result = receiveUsers(userList);
			expect(result).toEqual({
				type: RECEIVE_USERS,
				users: userList,
			});
		});
	});
});
