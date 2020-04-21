import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import LoadingBar from 'react-redux-loading'
import './App.css';
import { handleInitialData } from '../actions/shared'
// import { _getUsers, _getQuestions } from '../utils/_DATA'
import LoginPage from './LoginPage'
import AuthenticatedHeader from './AuthenticatedHeader'
import AuthenticatedApp from './AuthenticatedApp'
import QuestionPage from './QuestionPage'
import AddQuestion from './AddQuestion'

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }

  render(){
    return (
      <Router>
        <Fragment>
          <LoadingBar />
          {this.props.authedUser === null
          ? null
          : <AuthenticatedHeader />
          }

          {this.props.loading === true
            ? null
            : this.props.authedUser === null && <div>
                <Route path='/' exact component={LoginPage}/>
              </div>}

          {this.props.authedUser === null
          ? null
          : <div>
              <Route path='/' exact component={AuthenticatedApp} />
              <Route path='/questions/:id' exact component={QuestionPage} />
              <Route path='/add' exact component={AddQuestion} />
            </div>}
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
