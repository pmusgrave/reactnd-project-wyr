import React, { Component } from 'react'
import { connect } from 'react-redux'
import Question from './Question'
import LoginPage from './LoginPage'

class QuestionPage extends Component {
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
      return (
       <Question id={this.props.id}/>
      )
    }
  }
}

function mapStateToProps ({ authedUser }, props) {
  const { id } = props.match.params
  return {
    id,
    authedUser,
  }
}

export default connect(mapStateToProps)(QuestionPage)
