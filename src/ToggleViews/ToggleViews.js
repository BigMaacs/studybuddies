import React, { Component } from 'react';
import { connect } from 'react-redux';
import { toggleSessionView } from '../actions';
import './ToggleViews.css'

class ToggleViews extends Component {

  onSessionClick = (session) => {
    this.props.toggleSessionView(session);
  }

  getClassname = (session) => {
    return session === this.props.sessions.currentView ? 'Toggle-Menu-Item-Checked' : 'Toggle-Menu-Item'
  }

  filter = () => {
    // render new fitered sessions
  }

  render() {
    return (
      <div className="Toggle-Container">
        <div
          className={this.getClassname('AllSessions')}
          onClick={(e) => this.onSessionClick(e.target.id)}
          id={'AllSessions'}
        >
          <label id={'AllSessions'}>All Sessions</label>
        </div>
        <div
          className={this.getClassname('LiveSessions')}
          onClick={(e) => this.onSessionClick(e.target.id)}
          id={'LiveSessions'}
        >
          <label id={'LiveSessions'}>Live Sessions</label>
        </div>
        <div
          className={this.getClassname('MySessions')}
          onClick={(e) => this.onSessionClick(e.target.id)}
          id={'MySessions'}
        >
          <label id={'MySessions'}>My Sessions</label>
        </div>
      </div>
    )
  }
}

export default connect(({ sessions }) => ({ sessions }), { toggleSessionView })(ToggleViews);
