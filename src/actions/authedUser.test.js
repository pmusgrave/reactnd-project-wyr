import { setAuthedUser, SET_AUTHED_USER } from './authedUser';

describe('authedUser action', () => {
	describe('undefined argument', () => {
		it('should return SET_AUTHED_USER action with undefined id', () => {
			const result = setAuthedUser(undefined);
			expect(result).toEqual({
				type: SET_AUTHED_USER,
				id: undefined,
			});
		});
	});

	describe('valid argument', () => {
		it('should return SET_AUTHED_USER action with id from argument', () => {
			const result = setAuthedUser("johndoe");
			expect(result).toEqual({
				type: SET_AUTHED_USER,
				id: "johndoe"
			});
		});
	});
});
