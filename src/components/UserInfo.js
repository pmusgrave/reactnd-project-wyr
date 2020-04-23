import React, { Component } from 'react'
import { connect } from 'react-redux'

class UserInfo extends Component {
  render() {
    let answers = Object.values(this.props.users[this.props.id].answers).length;
    let questions = Object.values(this.props.users[this.props.id].questions).length;
    return (
      <div>
        <img
          alt="avatar"
          className="avatar"
          src={this.props.users[this.props.id].avatarURL}
        />
        <h2>{this.props.users[this.props.id].name}</h2>
        <p>Answered Questions {answers}</p>
        <p>Created Questions {questions}</p>
        <p>Score {answers + questions}</p>
      </div>
    );  
  }
}

function mapStateToProps ({ users }, props) {
  return {
    users,
  }
}

export default connect(mapStateToProps)(UserInfo)
