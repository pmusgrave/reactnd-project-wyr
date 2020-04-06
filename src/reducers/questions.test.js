import { RECEIVE_QUESTIONS } from '../actions/questions';
import questions from './questions';
import * as data from '../utils/_DATA';

describe('Questions reducer', () => {
	describe('undefined state, empty action argument', () => {
		it('should return default state', () => {
			const state = questions(undefined, {});
			expect(state).toEqual({});
		});
	});

	describe('empty state, RECEIVE_QUESTIONS action type', () => {
		it('should return initial questions list', async () => {
			let questionlist = await data._getQuestions();
			const state = questions({}, {
				type: RECEIVE_QUESTIONS,
				questions: questionlist,
			});
			expect(state).toEqual(questionlist);
		});
	});

	describe('non-empty state, undefined action type', () => {
		it('should make no changes to state', async () => {
			let questionList = await data._getQuestions()
			let state = {
				questions: questionList,
			}
			const newState = questions(state, { type:undefined });
			expect(newState).toEqual(state);
		});
	});

	describe('non-empty state, RECEIVE_QUESTIONS action type', () => {
		it('should append new questions onto state', async () => {
			let questionList = await data._getQuestions()
			let state = {
				questions: questionList,
			}

			let newQuestionList = {
				"a": {
			    id: 'a',
			    author: 'johndoe',
			    timestamp: 1467166872634,
			    optionOne: {
			      votes: ['sarahedo'],
			      text: 'asdf',
			    },
			    optionTwo: {
			      votes: [],
			      text: 'zxcv'
			    }
			  },	
			};

			const newState = questions(state, {
				type: RECEIVE_QUESTIONS,
				questions: newQuestionList,
			});

			expect(newState).not.toEqual(state);
			expect(newState.questions).toEqual(Object.assign(questionList,newQuestionList));
		});
	});

	describe('invalid action type', () => {
		it('should not modify state', () => {
			const state = questions(undefined, {
				type: "NOT_A_REAL_ACTION_TYPE",
				data: { a:1,b:2 },
			});
			expect(state).toEqual({});

			const state2 = questions({ c:3,d:4 }, {
				type: "NOT_A_REAL_ACTION_TYPE",
				data: { a:1,b:2 },
			});
			expect(state2).toEqual({ c:3,d:4 });
		});
	});
});
