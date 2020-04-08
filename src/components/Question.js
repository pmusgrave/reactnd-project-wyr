import React, { Component } from 'react'
import { connect } from 'react-redux'
import { answerQuestion } from '../actions/questions'

class Question extends Component {
  state = {
    choice: null,
  };

  submitClick = (e) => {
    e.preventDefault()
    console.log(this.props.id, this.props.authedUser, this.state.choice)
    this.props.dispatch(answerQuestion({
      qid: this.props.id,
      authedUser: this.props.authedUser,
      answer: this.state.choice,
    }))
  }

  handleChange = (e) => {
    this.setState({ choice: e.target.value });
  }

  render() {
    return (
      <form onSubmit={(e) => {this.submitClick(e)}}>
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

function mapStateToProps ({ authedUser, questions }, props) {
  const question = questions[props.id]
  return {
    authedUser,
    question,
  }
}

export default connect(mapStateToProps)(Question)
