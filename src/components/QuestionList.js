import React, { Component } from 'react'
import { connect } from 'react-redux'
import Login from './Login'

class QuestionList extends Component {
  render() {
    return (
      <ul>
      	{Object.values(this.props.questions)
  		.filter((question) => (question.author === this.props.authedUser))
  		.map((question) => (
      		<li key={question.id}>
      			<div>
      				<p>Would you rather</p>
	      			<p>{question.optionOne.text}</p>
	      			<button>View Poll</button>
      			</div>
      		</li>
  		))}
      </ul>
    );
  }
}

function mapStateToProps ({ authedUser, questions }) {
  return {
    loading: authedUser === null,
    authedUser,
    questions,
  }
}

export default connect(mapStateToProps)(QuestionList)
