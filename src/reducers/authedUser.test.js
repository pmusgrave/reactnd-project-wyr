import { SET_AUTHED_USER } from '../actions/authedUser';
import authedUser from './authedUser';
import * as data from '../utils/_DATA';

describe('authedUser reducer', () => {
	describe('undefined state, empty action argument', () => {
		it('should return default state', () => {
			const state = authedUser(undefined, {});
			expect(state).toBeNull();
		});
	});

	describe('empty state, SET_AUTHED_USER action type', () => {
		it('should return new authenticated user', async () => {
			let userList = await data._getUsers();
			let newAuthedUser = Object.values(userList)[0];
			const state = authedUser({}, {
				type: SET_AUTHED_USER,
				id: newAuthedUser.id,
			});
			expect(state).toEqual(newAuthedUser.id);
		});
	});

	describe('non-empty state, undefined action type', () => {
		it('should make no changes to state', async () => {
			let userList = await data._getUsers();
			let state = {
				id: Object.values(userList)[0].id,
			}
			const newState = authedUser(state, { type:undefined });
			expect(newState).toEqual(state);
		});
	});

	describe('non-empty state, SET_AUTHED_USER action type', () => {
		it('should return new authenticated user', async () => {
			let userList = await data._getUsers();
			let origAuthedUser = Object.values(userList)[0];
			let state = {
				id: origAuthedUser.id,
			}

			let newAuthedUser = Object.values(userList)[1];

			const newState = authedUser(state, {
				type: SET_AUTHED_USER,
				id: newAuthedUser.id,
			});

			expect(newState).not.toEqual(state);
			expect(newState).toEqual(newAuthedUser.id);
		});
	});

	describe('invalid action type', () => {
		it('should not modify state', () => {
			const state = authedUser(undefined, {
				type: "NOT_A_REAL_ACTION_TYPE",
				data: { a:1,b:2 },
			});
			expect(state).toBeNull();

			const state2 = authedUser({ c:3,d:4 }, {
				type: "NOT_A_REAL_ACTION_TYPE",
				data: { a:1,b:2 },
			});
			expect(state2).toEqual({ c:3,d:4 });
		});
	});
});
