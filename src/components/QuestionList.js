import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link  } from 'react-router-dom'

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
      <div
        className="question-info"
        className="center">
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
                <div className="question">
                  <p>Would you rather</p>
                  <p>{question.optionOne.text}</p>
                  <Link to={`/questions/${question.id}`}>
                    <button>View Poll</button>
                  </Link>
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
