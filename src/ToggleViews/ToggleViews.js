import React, { Component } from 'react';
import './ToggleViews.css'

export default class ToggleViews extends Component {
  constructor(props) {
    super(props)
    this.state = {
      AllSessions: true,
      LiveSessions: false,
      MySessions: false,
    }
  }

  onSessionClick = (session) => {
    const newState = {
      AllSessions: false,
      LiveSessions: false,
      MySessions: false
    } 
    newState[session] = true 
    this.setState({ ...newState }) 
  }

  getClassname = (session) => {
    console.log(this.state[session])
    return this.state[session] ? 'Toggle-Menu-Item-Checked' : 'Toggle-Menu-Item'
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
        >
          <label id={'AllSessions'}>All Sessions</label>
        </div>
        <div 
          className={this.getClassname('LiveSessions')} 
          onClick={(e) => this.onSessionClick(e.target.id)}
        >
          <label id={'LiveSessions'}>Live Sessions</label>
        </div>
        <div 
          className={this.getClassname('MySessions')} 
          onClick={(e) => this.onSessionClick(e.target.id)}
        >
          <label id={'MySessions'}>My Sessions</label>
        </div>
      </div>
    )
  }
}