import React, { Component } from 'react'
import { connect } from 'react-redux'
import UserInfo from './UserInfo'
import LoginPage from './LoginPage'

class Leaderboard extends Component {
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
        <ul className="center">
          {Object.values(this.props.users)
            .sort((usera, userb) => {
              let answers_a = Object.values(this.props.users[usera.id].answers).length;
              let questions_a = Object.values(this.props.users[usera.id].questions).length;
              let answers_b = Object.values(this.props.users[userb.id].answers).length;
              let questions_b = Object.values(this.props.users[userb.id].questions).length;
              return (answers_b + questions_b) - (answers_a + questions_a); 
            })
            .map((user) => {
            return (
              <li key={user.id}
                className="question">
                <UserInfo id={user.id} />
              </li>)
          })}
        </ul>
      );
    }
  }
}

function mapStateToProps ({ users, authedUser }, props) {
  return {
    users,
    authedUser
  }
}

export default connect(mapStateToProps)(Leaderboard)
