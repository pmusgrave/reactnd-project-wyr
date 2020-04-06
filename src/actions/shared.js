import { _getUsers, _getQuestions } from '../utils/_DATA';
import { receiveUsers } from '../actions/users';
import { receiveQuestions } from '../actions/questions';
import { setAuthedUser } from '../actions/authedUser';
import { showLoading, hideLoading } from 'react-redux-loading'

export function handleInitialData() {
	return (dispatch) => {
		dispatch(showLoading());

		return Promise.all([
	      _getUsers(),
	      _getQuestions()])
	    .then(([users, questions]) => ({
			  users,
			  questions,
			}))
	    .then((data) => {
	    	dispatch(receiveUsers(data.users));
	    	dispatch(receiveQuestions(data.questions));
	    	dispatch(hideLoading());
		});
	}
}
