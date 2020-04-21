import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setAuthedUser } from '../actions/authedUser'
import AuthenticatedHeader from './AuthenticatedHeader'
import QuestionList from './QuestionList'

class AuthenticatedApp extends Component {
  logoutClick = () => {
    this.props.dispatch(setAuthedUser(null));
  }

  render() {
    return (
      <div className="center">
        <QuestionList />
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

export default connect(mapStateToProps)(AuthenticatedApp)
