import { RECEIVE_USERS } from '../actions/users';
import users from './users';
import * as data from '../utils/_DATA';

describe('users reducer', () => {
	describe('undefined state, empty action argument', () => {
		it('should return default state', () => {
			const state = users(undefined, {});
			expect(state).toEqual({});
		});
	});

	describe('empty state, RECEIVE_USERS action type', () => {
		it('should return initial users list', async () => {
			let userList = await data._getUsers();
			const state = users({}, {
				type: RECEIVE_USERS,
				users: userList,
			});
			expect(state).toEqual(userList);
		});
	});

	describe('non-empty state, undefined action type', () => {
		it('should make no changes to state', async () => {
			let userList = await data._getUsers()
			let state = {
				users: userList,
			}
			const newState = users(state, { type:undefined });
			expect(newState).toEqual(state);
		});
	});

	describe('non-empty state, RECEIVE_USERS action type', () => {
		it('should append new users onto state', async () => {
			let userList = await data._getUsers()
			let state = {
				users: userList,
			}

			let newUserList = {
				johndoe: {
				    id: 'johndoe',
				    name: 'John Doe',
				    avatarURL: "http://placekitten.com/400/400",
				    answers: {
				      "xj352vofupe1dqz9emx13r": 'optionOne',
				      "vthrdm985a262al8qx3do": 'optionTwo',
				      "6ni6ok3ym7mf1p33lnez": 'optionTwo'
				    },
				    questions: ['6ni6ok3ym7mf1p33lnez', 'xj352vofupe1dqz9emx13r'],
				}
			};

			const newState = users(state, {
				type: RECEIVE_USERS,
				users: newUserList,
			});

			expect(newState).not.toEqual(state);
			expect(newState.users).toEqual(Object.assign(userList,newUserList));
		});
	});

	describe('invalid action type', () => {
		it('should not modify state', () => {
			const state = users(undefined, {
				type: "NOT_A_REAL_ACTION_TYPE",
				data: { a:1,b:2 },
			});
			expect(state).toEqual({});

			const state2 = users({ c:3,d:4 }, {
				type: "NOT_A_REAL_ACTION_TYPE",
				data: { a:1,b:2 },
			});
			expect(state2).toEqual({ c:3,d:4 });
		});
	});
});
