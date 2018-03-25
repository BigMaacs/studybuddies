import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Navbar, NavItem } from 'react-materialize'
import Layout from '../Layout'
import SignupPage from '../SignupPage'
import LiveSession from '../LiveSession'
import './NavBar.css'


export default class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar className={"NavBar"}brand='Studybuddies' right>
            <NavItem href='/dashboard'>Dashboard</NavItem>
            <NavItem href='/'>Login</NavItem>
          </Navbar>
          <Switch>
            <Route exact path="/" component={SignupPage} />
            <Route exact path="/dashboard" component={Layout} />
            <Route excat path="/session/:id" component={LiveSession} />
          </Switch>
        </div>
      </Router>
    );
  }
}
