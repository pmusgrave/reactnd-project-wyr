import React, { Component } from 'react'
import { connect } from 'react-redux'

class QuestionList extends Component {
  state = {
    view: "unanswered"
  };

  setViewAnswered = () => {
    this.setState({ view:"answered" })
  }

  setViewUnanswered = () => {
    this.setState({ view:"unanswered" }) 
  }

  render() {
    let questionsList = this.state.view === "unanswered"
    ? Object.values(this.props.questions)
      .filter((question) => {
        return (!question.optionOne.votes.includes(this.props.authedUser)
          && !question.optionTwo.votes.includes(this.props.authedUser))
      }) 
    : Object.values(this.props.questions)
      .filter((question) => {
        return (question.optionOne.votes.includes(this.props.authedUser)
          || question.optionTwo.votes.includes(this.props.authedUser))
      })

    return (
      <div>
        <span>
          <button onClick={this.setViewUnanswered}>
            Unanswered Questions
          </button>
          <button onClick={this.setViewAnswered}>
            Answered Questions
          </button>
        </span>
        <div>
          <ul>
            {questionsList.map((question) => (
              <li key={question.id}>
                <div>
                  <p>Would you rather</p>
                  <p>{question.optionOne.text}</p>
                  <button>View Poll</button>
                </div>
              </li>
          ))}
          </ul>
        </div>
      </div>
    );
  }
}

function mapStateToProps ({ authedUser, questions }) {
  return {
    authedUser,
    questions,
  }
}

export default connect(mapStateToProps)(QuestionList)
