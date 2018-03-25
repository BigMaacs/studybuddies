import React from 'react';
import { connect } from 'react-redux';
import SignupForm from '../SignupForm';

const SignupPage = ({ history, user }) => {
  if (user.loggedIn) {
    history.push('/dashboard');
  }
  return (
    <div>
      <SignupForm />
    </div>
  )
}

export default connect(({ user }) => ({
  user
}))(SignupPage);
