import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SignupPage from './SignupPage/SignupPage';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>

      <div>
      <Switch>
        <Route exact path="/" component={SignupPage} />
        {/* <Route exact path="/dashboard" component={Dashboard} /> */}

      </Switch>

      </div>
    </Router>
    );
  }
}

export default App;
