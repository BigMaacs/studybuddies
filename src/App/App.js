import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Navbar, NavItem, Button } from 'react-materialize';
import { connect } from 'react-redux';
import Layout from '../Layout'
import SignupPage from '../SignupPage';


class App extends Component {
  render() {
    const { user } = this.props;
    return (
      <Router>
        <div className="App">
          <Navbar brand='Studybuddies' right>
            <NavItem href='/dashboard'>Dashboard</NavItem>
            {
              user.loggedIn && <Button>50 points</Button>
            }
            {
              user.loggedIn ?
              <NavItem>{user.username}</NavItem> :
              <NavItem href='/'>Login</NavItem>
            }
          </Navbar>
          <Switch>
            <Route exact path="/" component={SignupPage} />
            <Route exact path="/dashboard" component={Layout} />
          </Switch>

        </div>
      </Router>
    );
  }
}

export default connect(({ user }) => ({
  user
}))(App);
