import { ANSWER_QUESTION, RECEIVE_QUESTIONS } from '../actions/questions';
import { _getQuestions, _saveQuestionAnswer, _saveQuestion } from '../utils/_DATA'

export default function questions(state = {}, action) {
	switch(action.type) {
	case RECEIVE_QUESTIONS:
		return {
			...state,
			...action.questions,
		}
	case ANSWER_QUESTION:
		return {
			...state,
		}
	default:
		return state;
	}
}
