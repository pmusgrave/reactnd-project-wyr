import React, { Component } from 'react'
import { connect } from 'react-redux'

class Results extends Component {
  render() {
    let option_one_answers = this.props.question.optionOne.votes.length;
    let option_two_answers = this.props.question.optionTwo.votes.length;
    let total_answers = option_one_answers + option_two_answers;
    return (
      <div className="question"
        className="center">
        <h4>Asked by {this.props.users[this.props.question.author].name}</h4>
        <img
          className="avatar"
          src={this.props.users[this.props.question.author].avatarURL}
        />
        <h2>Results:</h2>
        <div className="question">
          <p>Would you rather {this.props.question.optionOne.text}?</p>
          <p>{option_one_answers} out of {total_answers} votes</p>
        </div>
        <div className="question">
          <p>Would you rather {this.props.question.optionTwo.text}?</p>
          <p>{option_two_answers} out of {total_answers} votes</p>
        </div>
      </div>
    );
  }
}

function mapStateToProps ({ users, authedUser, questions }, props) {
  const question = questions[props.id]
  return {
    users,
    authedUser,
    question,
  }
}

export default connect(mapStateToProps)(Results)
