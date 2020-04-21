import { _getQuestions, _saveQuestionAnswer, _saveQuestion } from '../utils/_DATA'

export const ANSWER_QUESTION = 'ANSWER_QUESTION';
export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS';

export function receiveQuestions(questions) {
	return {
		type: RECEIVE_QUESTIONS,
		questions,
	}
}

export function answerQuestion(answer) {
	return {
		type: ANSWER_QUESTION,
		answer,
	}
}

export function addQuestion(optionOne, optionTwo, author) {
	return (dispatch) => {
		_saveQuestion({
			author: author,
			optionOneText: optionOne,
			optionTwoText: optionTwo,
		}).then((res) => {
			let new_question = res;
			let updated_questions = _getQuestions().then((data) => {
				console.log(data);
				dispatch(receiveQuestions(data));
			});
		});
	}
}

