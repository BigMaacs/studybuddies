import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Layout from '../Layout'
import SignupPage from '../SignupPage';
import './App.css';


export default class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">

          <Switch>
            <Route exact path="/" component={SignupPage} />
            <Route exact path="/dashboard" component={Layout} />
          </Switch>

        </div>
      </Router>
    );
  }
}
