import { ANSWER_QUESTION, RECEIVE_QUESTIONS } from '../actions/questions';
import { _saveQuestionAnswer } from '../utils/_DATA'

export default function questions(state = {}, action) {
	switch(action.type) {
	case RECEIVE_QUESTIONS:
		return {
			...state,
			...action.questions,
		}
	case ANSWER_QUESTION:
		// console.log(state.questions[action.answer.qid][action.answer.answerValue].votes)
		let answer = action.answer.answer;
		let questions = {...state}
		console.log(state)
		let options = [
			questions[action.answer.qid].optionOne,
			questions[action.answer.qid].optionTwo,
		];
		options.map((option) => {
			if (option.votes.includes(action.answer.authedUser)) {
				option.votes.splice(option.votes.indexOf(action.answer.authedUser),1)
			}
		})
		questions[action.answer.qid][action.answer.answer].votes.push(action.answer.authedUser);

		_saveQuestionAnswer(action.answer)

		return questions;
	default:
		return state;
	}
}
