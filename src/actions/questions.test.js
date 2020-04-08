import { answerQuestion, receiveQuestions, ANSWER_QUESTION, RECEIVE_QUESTIONS } from './questions';
import * as data from '../utils/_DATA';

describe('receiveQuestions action', () => {
	it('should receive list of questions', async () => {
		let questionList = await data._getQuestions();
		const result = receiveQuestions(questionList);
		expect(result).toEqual({
			type: RECEIVE_QUESTIONS,
			questions: questionList,
		});
	});
});

describe('answer questions acton', () => {
	it("should update the user's answer", async () => {
		let questionList = await data._getQuestions();
		let qid = "8xf0y6ziyjabvozdd253nd";
		let authedUser = "johndoe";
		let answer = "optionOne";

		const result = answerQuestion({
			qid,
			authedUser,
			answer,
		});
		
		expect(result).toEqual({
			type: ANSWER_QUESTION,
			answer: {
				qid,
				authedUser,
				answer
			},
		});
	});
});
