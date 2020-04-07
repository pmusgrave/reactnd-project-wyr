import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import LoadingBar from 'react-redux-loading'
import logo from '../resources/logo.svg';
import './App.css';
import { handleInitialData } from '../actions/shared'
// import { _getUsers, _getQuestions } from '../utils/_DATA'
import LoginPage from './LoginPage'
import QuestionList from './QuestionList'

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }

  render(){
    return (
      <Router>
        <Fragment>
          <LoadingBar />
          {this.props.loading === true
            ? null
            : <div>
                <Route path='/' exact component={LoginPage}/>
              </div>}

          {this.props.authedUser === null
          ? null
          : <Route path='/' exact component={QuestionList}/>}
        </Fragment>
      </Router>
    );
  }
}

function mapStateToProps ({ authedUser, users, questions }) {
  return {
    loading: Object.values(users).length === 0,
    authedUser,
    users,
    questions,
  }
}

export default connect(mapStateToProps)(App)
