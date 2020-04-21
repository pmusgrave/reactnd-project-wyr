import { _getQuestions, _saveQuestionAnswer, _saveQuestion, _getUsers } from '../utils/_DATA'
import { receiveUsers } from './users'
import { showLoading, hideLoading } from 'react-redux-loading'

export const ANSWER_QUESTION = 'ANSWER_QUESTION';
export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS';

export function receiveQuestions(questions) {
	return {
		type: RECEIVE_QUESTIONS,
		questions,
	}
}

export function answerQuestions(questions) {
	return {
		type: RECEIVE_QUESTIONS,
		questions,
	}
}

export function handleAnswerQuestion(authedUser, qid, answer) {
	return async (dispatch) => {
		dispatch(showLoading());
		await _saveQuestionAnswer({ authedUser, qid, answer })
		let questions = await _getQuestions();
		dispatch(receiveQuestions(questions));
		let users = await _getUsers();
		dispatch(receiveUsers(users));
		dispatch(hideLoading());
	}
}

export function addQuestion(optionOne, optionTwo, author) {
	return async (dispatch) => {
		dispatch(showLoading());
		let new_question = await _saveQuestion({
			author: author,
			optionOneText: optionOne,
			optionTwoText: optionTwo,
		});
		let updated_questions = await _getQuestions()
		dispatch(receiveQuestions(updated_questions));
		let users = await _getUsers();
		dispatch(receiveUsers(users));
		dispatch(hideLoading());
	}
}
