import React from 'react';
import { connect } from 'react-redux';
import SignupForm from '../SignupForm';
import './SignupPage.css'

const SignupPage = ({ history, user }) => {
  if (user.loggedIn) {
    history.push('/dashboard');
  }
  return (
    <div className={"Signup-Container"}>
      <SignupForm />
    </div>
  )
}

export default connect(({ user }) => ({
  user
}))(SignupPage);
