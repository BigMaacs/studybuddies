import React from 'react';
import { connect } from 'react-redux';
import SignupForm from '../SignupForm';
import { Navbar, NavItem } from 'react-materialize'

const SignupPage = ({ history, user }) => {
  if (user.loggedIn) {
    history.push('/dashboard');
  }
  return (
    <div>
      <Navbar brand='Studybuddies' right>
        <NavItem>Dashboard</NavItem>
        <NavItem>Login</NavItem>
      </Navbar>
      <SignupForm/>
    </div>
  )
}

export default connect(({ user }) => ({
  user
}))(SignupPage);
