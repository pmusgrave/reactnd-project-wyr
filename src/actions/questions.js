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
