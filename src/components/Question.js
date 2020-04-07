import React, { Component } from 'react'
import { connect } from 'react-redux'

class Question extends Component {
  render() {
    return (
      <div>
        <p>Would You Rather...</p>
        <p>{this.props.question.optionOne.text}</p>
        <p>{this.props.question.optionTwo.text}</p>
      </div>
    );
  }
}

function mapStateToProps ({ authedUser, questions }, props) {
  const question = questions[props.id]
  return {
    authedUser,
    question,
  }
}

export default connect(mapStateToProps)(Question)
