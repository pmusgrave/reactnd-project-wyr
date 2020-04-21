import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link  } from 'react-router-dom'
import { setAuthedUser } from '../actions/authedUser'
import AddQuestion from './AddQuestion'

class AuthenticatedHeader extends Component {
  logoutClick = () => {
    this.props.dispatch(setAuthedUser(null));
  }

  render() {
    let { users, authedUser } = this.props;

    return (
      <div>
        <Link to='/'>
          <button>Home</button>
        </Link>
        <Link to='/add'>
          <button>New Question</button>
        </Link>
        <Link to='/leaderboard'>
          <button>Leader Board</button>
        </Link>
        <span>
          Hello, {users[authedUser].name}
          <img
            src={users[authedUser].avatarURL}
            alt="avatar" 
            height={50}
            width={50}/>
        </span>
        <button onClick={this.logoutClick}>Logout</button>
      </div>
    );
  }
}

function mapStateToProps ({ authedUser, users }) {
  return {
    authedUser,
    users,
  }
}

export default connect(mapStateToProps)(AuthenticatedHeader)
