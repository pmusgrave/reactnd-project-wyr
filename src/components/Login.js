import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setAuthedUser } from '../actions/authedUser'

class Login extends Component {
  state = {
    selectedUser: null,
  }

  selectUser = (id) => {
    this.setState((prev_state) => ({
      selectedUser: id
    }))
  }

  changeAuthedUser = (id) => {
    this.props.dispatch(setAuthedUser(id));
  }

  render() {
    return (
      <div>
        <div>
          <select
            defaultValue={'DEFAULT'}
            data-testid="login-select"
            onChange={(e)=> { this.selectUser(e.target.value) }}>
            <option disabled value='DEFAULT'>Select a user</option>
            {Object.values(this.props.users).map((user) => (
              <option key={user.id}>
                {user.id}
              </option>))}
          </select>
        </div>
        <div>
          <button onClick={() => {
            this.changeAuthedUser(this.state.selectedUser)
          }}>
            Sign in
          </button>
        </div>  
      </div>
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
