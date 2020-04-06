import { RECEIVE_USERS } from '../actions/users';
import users from './users';
import * as data from '../utils/_DATA';

describe('Users reducer', () => {
	it('should return default state', () => {
		const state = users({}, {});
		expect(state).toEqual({});
	});

	it('should return initial users list', async () => {
		let userlist = await data._getUsers()
		const state = users({}, {
			type: RECEIVE_USERS,
			users: userlist,
		});
		expect(state).toEqual(userlist);
	});
});
