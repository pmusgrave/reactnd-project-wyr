import React, { Component } from 'react'
import { connect } from 'react-redux'
import Question from './Question'

class QuestionPage extends Component {
  render() {
    return (
      <Question id={this.props.id}/>
    );
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