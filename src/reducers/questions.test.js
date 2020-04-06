import { RECEIVE_QUESTIONS } from '../actions/questions';
import questions from './questions';
import * as data from '../utils/_DATA';

describe('Users reducer', () => {
	it('should return default state', () => {
		const state = questions({}, {});
		expect(state).toEqual({});
	});

	it('should return initial users list', async () => {
		let questionlist = await data._getQuestions()
		const state = questions({}, {
			type: RECEIVE_QUESTIONS,
			questions: questionlist,
		});
		expect(state).toEqual(questionlist);
	});
});
