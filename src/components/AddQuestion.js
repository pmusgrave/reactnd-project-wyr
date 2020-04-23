import React, { Component } from 'react'
import { Redirect } from 'react-router'
import { connect } from 'react-redux'
import { addQuestion } from '../actions/questions'
import LoginPage from './LoginPage'

class AddQuestion extends Component {
  state = {
    optionOne: "",
    optionTwo: "",
    redirect: false,
  };

  handleChangeOption = (e, option) => {
    if (option === "one") {
      this.setState({ optionOne: e.target.value})
    }
    else if (option === "two") {
      this.setState({ optionTwo: e.target.value})
    }
  }

  submitClick = (e) => {
    e.preventDefault()
    this.props.dispatch(addQuestion(
      this.state.optionOne,
      this.state.optionTwo,
      this.props.authedUser,
    ));
    this.setState({ redirect: true });
  }

  render() {
    if (this.props.authedUser === null) {
      return (
        <div className="center">
          <h2>Please Log In</h2>
          <LoginPage />
        </div>
      )
    }
    else {
      return this.state.redirect
      ? <Redirect push to="/" />
      : (
        <div className="center">
          <h1>Create New Question</h1>
          <h4>Complete the question:</h4>
          <h2>Would you rather ...</h2>
          <form onSubmit={(e) => {this.submitClick(e)}}>
            <label>
              <input
                type="text"
                name="optionOne"
                onChange={(e) => {this.handleChangeOption(e,"one")}} 
              />
            </label>
            <h3>or</h3>
            <label>
              <input
                type="text"
                name="optionTwo"
                onChange={(e) => {this.handleChangeOption(e,"two")}} 
              />
            </label>
            <div>
              <button type="submit">Submit</button>
            </div>
          </form>
        </div>
      );
    }
  }
}

function mapStateToProps ({ authedUser, questions }, props) {
  const question = questions[props.id]
  return {
    authedUser,
    question,
  }
}

export default connect(mapStateToProps)(AddQuestion)
