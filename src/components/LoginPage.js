import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setAuthedUser } from '../actions/authedUser'
import logo from '../resources/logo.svg';
import Login from './Login'

class LoginPage extends Component {
  render() {
    return (
    	<div>
    		<div>
    			<p>Welcome to the Would You Rather App!</p>
    			<p>Please sign in to continue</p>
    		</div>
    		<div>
    			<img
    				src={logo}
    				alt="App Logo"
    				width={200}
    				height={200}/>
    			<p>Sign in</p>
	    		<Login />
    		</div>
    	</div>
    );
  }
}

function mapStateToProps ({ users }) {
  return {
    users,
  }
}

export default connect(mapStateToProps)(LoginPage)
