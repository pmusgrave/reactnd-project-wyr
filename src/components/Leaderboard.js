import React, { Component } from 'react'
import { connect } from 'react-redux'
import UserInfo from './UserInfo'

class Leaderboard extends Component {
  render() {
    console.log(this.props.users);
    return (
      <ul>
        {Object.values(this.props.users).map((user) => {
          return (
            <li key={user.id}>
              <UserInfo id={user.id} />
            </li>)
        })}
      </ul>
    );
  }
}

function mapStateToProps ({ users, authedUser }, props) {
  return {
    users,
    authedUser
  }
}

export default connect(mapStateToProps)(Leaderboard)
