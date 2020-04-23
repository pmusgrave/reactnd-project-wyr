import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import LoadingBar from 'react-redux-loading'
import './App.css';
import { handleInitialData } from '../actions/shared'
import LoginPage from './LoginPage'
import AuthenticatedHeader from './AuthenticatedHeader'
import AuthenticatedApp from './AuthenticatedApp'
import QuestionPage from './QuestionPage'
import AddQuestion from './AddQuestion'
import Leaderboard from './Leaderboard'
import AuthPage from './AuthPage'
import ErrorPage from './ErrorPage'

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
          ? <Switch>
              <Route path='/' exact/>
              <Route path='/questions/:id' exact component={QuestionPage} />
              <Route path='/add' exact component={AddQuestion} />
              <Route path='/leaderboard' exact component={Leaderboard} />
              <Route component={ErrorPage} />
            </Switch>
          : <Switch>
              <Route path='/' exact component={AuthenticatedApp} />
              <Route path='/questions/:id' exact component={QuestionPage} />
              <Route path='/add' exact component={AddQuestion} />
              <Route path='/leaderboard' exact component={Leaderboard} />
              <Route component={ErrorPage} />
            </Switch>}
        </Fragment>
      </Router>
    );
  }
}

function mapStateToProps ({ authedUser, users, questions, loading }) {
  return {
    loading: Object.values(users).length === 0,
    authedUser,
    users,
    questions,
  }
}

export default connect(mapStateToProps)(App)
