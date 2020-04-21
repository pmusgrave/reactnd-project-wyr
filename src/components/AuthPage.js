import React, { Component } from 'react'
import { Link  } from 'react-router-dom'

function AuthNotice(props) {
  return (
    <a>
      <Link to='/'>Please Log In</Link>
    </a>
  );
}

export default AuthNotice;
