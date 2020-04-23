import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleAnswerQuestion } from '../actions/questions'
import Results from './Results'
import ErrorPage from './ErrorPage'

class Question extends Component {
  state = {
    choice: null,
    answered: false,
  };

  submitClick = (e) => {
    e.preventDefault()
    if (this.state.choice === null) {
      return;
    }
    
    this.props.dispatch(handleAnswerQuestion(
      this.props.authedUser,
      this.props.id,
      this.state.choice,
    ))
    this.setState({ answered:true });
  }

  handleChange = (e) => {
    this.setState({ choice: e.target.value });
  }

  render() {
    if (this.props.question === undefined) {
      return <ErrorPage/>
    }
    
    let answered = this.props.question.optionOne.votes.includes(this.props.authedUser)
      || this.props.question.optionTwo.votes.includes(this.props.authedUser);

    return (
      answered 
      ? <Results id={this.props.id}/>

      : <form
          className="question"
          onSubmit={(e) => {this.submitClick(e)}}>
        <img
          className="avatar"
          src={this.props.users[this.props.question.author].avatarURL}
        />
        <p>{this.props.users[this.props.question.author].name} Asks</p>
        <p>Would You Rather...</p>
        <div>
          <label>
            <input type="radio" name="poll" value="optionOne" onChange={this.handleChange}/>
            {this.props.question.optionOne.text}
          </label>
        </div>
        <div>
          <label>
            <input type="radio" name="poll" value="optionTwo" onChange={this.handleChange}/>
            {this.props.question.optionTwo.text}
          </label>
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
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

export default connect(mapStateToProps)(Question)
