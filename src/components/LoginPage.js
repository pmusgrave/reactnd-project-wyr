import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setAuthedUser } from '../actions/authedUser'
import Login from './Login'

class LoginPage extends Component {
  render() {
    return (
      <Login />
    );
  }
}

function mapStateToProps ({ authedUser, users }) {
  return {
    loading: authedUser === null,
    users,
  }
}

export default connect(mapStateToProps)(LoginPage)
