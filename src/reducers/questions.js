import { ANSWER_QUESTION, RECEIVE_QUESTIONS } from '../actions/questions';

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
