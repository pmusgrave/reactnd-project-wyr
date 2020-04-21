import { _getQuestions, _saveQuestionAnswer, _saveQuestion, _getUsers } from '../utils/_DATA'
import { receiveUsers } from './users'

export const ANSWER_QUESTION = 'ANSWER_QUESTION';
export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS';

export function receiveQuestions(questions) {
	return {
		type: RECEIVE_QUESTIONS,
		questions,
	}
}

export function answerQuestion(authedUser, qid, answer) {
	return (dispatch) => {
		_saveQuestionAnswer({ authedUser, qid, answer }).then(() => {
			_getQuestions()
			.then((data) => {
				dispatch(receiveQuestions(data));
			})
			.then(() => {
				_getUsers().then((users) => {
					dispatch(receiveUsers(users));
				})
			})
		})
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
				dispatch(receiveQuestions(data));
			});
		});
	}
}
