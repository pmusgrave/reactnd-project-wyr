import { receiveQuestions, RECEIVE_QUESTIONS } from './questions';
import * as data from '../utils/_DATA';

describe('receiveQuestions action', () => {
	describe('valid argument', () => {
		it('should return SET_AUTHED_USER action with id from argument', async () => {
			let questionList = await data._getQuestions();
			const result = receiveQuestions(questionList);
			expect(result).toEqual({
				type: RECEIVE_QUESTIONS,
				questions: questionList,
			});
		});
	});
});
