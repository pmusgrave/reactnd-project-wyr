import React, { Component } from 'react'
import { connect } from 'react-redux'

class Results extends Component {
  render() {
    let option_one_answers = this.props.question.optionOne.votes;
    let option_two_answers = this.props.question.optionTwo.votes;
    let total_answers = option_one_answers.length + option_two_answers.length;
    return (
      <div className="question">
        <h4>Asked by {this.props.users[this.props.question.author].name}</h4>
        <img
          alt="avatar"
          className="avatar"
          src={this.props.users[this.props.question.author].avatarURL}
        />
        <h2>Results:</h2>
        <div className="question">
          <p>Would you rather {this.props.question.optionOne.text}?</p>
          <p>{((option_one_answers.length / total_answers)*100).toFixed(2)}%</p>
          <p>{option_one_answers.length} out of {total_answers} votes</p>
          {option_one_answers.includes(this.props.authedUser)
            ? <p>Your Vote</p>
            : null
          }
        </div>
        <div className="question">
          <p>Would you rather {this.props.question.optionTwo.text}?</p>
          <p>{((option_two_answers.length / total_answers)*100).toFixed(2)}%</p>
          <p>{option_two_answers.length} out of {total_answers} votes</p>
          {option_two_answers.includes(this.props.authedUser)
            ? <p>Your Vote</p>
            : null
          }
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
