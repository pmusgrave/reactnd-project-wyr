import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setAuthedUser } from '../actions/authedUser'

class Login extends Component {
  changeUser = (id) => {
    this.props.dispatch(setAuthedUser(id));
  }

  render() {
    return (
      <select
        defaultValue={'DEFAULT'}
        data-testid="login-select"
        onChange={(e)=> { this.changeUser(e.target.value) }}>
        <option disabled value='DEFAULT'>Select a user</option>
        {Object.values(this.props.users).map((user) => (
          <option key={user.id}>
            {user.id}
          </option>))}
      </select>
    );
  }
}

function mapStateToProps ({ authedUser, users }) {
  return {
    loading: authedUser === null,
    users,
  }
}

export default connect(mapStateToProps)(Login)
