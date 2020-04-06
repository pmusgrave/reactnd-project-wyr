import { SET_AUTHED_USER } from '../actions/authedUser';
import authedUser from './authedUser';
import * as data from '../utils/_DATA';

describe('Authenticated user reducer', () => {
	it('should return default state', () => {
		const state = authedUser(undefined, {});
		expect(state).toBeNull();
	});

	it('should return first user in user list', async () => {
		let userlist = await data._getUsers();
		let user = Object.keys(userlist)[0];
		const state = authedUser({}, {
			type: SET_AUTHED_USER,
			id: user,
		});

		expect(userlist).toBeDefined();
		expect(user).toBeDefined();
		expect(state).toEqual(user);
	});
});
