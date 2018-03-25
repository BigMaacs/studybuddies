import React from 'react';
import SignupForm from '../SignupForm/SignupForm';
import { Navbar, NavItem } from 'react-materialize'

const SignupPage = () => {
  return (
    <div>
      <Navbar brand='Studybuddies' right>
        <NavItem href='get-started.html'>Dashboard</NavItem>
        <NavItem href='components.html'>Login</NavItem>
      </Navbar>
      <SignupForm>
      </SignupForm>
    </div>
  )
}

export default SignupPage;
