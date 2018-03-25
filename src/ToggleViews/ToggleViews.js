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
    this.onAllSessionsClick = this.onAllSessionsClick.bind(this)
    this.onLiveSessionsClick = this.onLiveSessionsClick.bind(this)
    this.onMySessionsClick = this.onMySessionsClick.bind(this)
    this.filter = this.filter.bind(this)
  }

  onAllSessionsClick() {
    this.setState({
      AllSessions: true,
      LiveSessions: false,
      MySessions: false,
    })
  }

  onLiveSessionsClick() {
    this.setState({
      AllSessions: false,
      LiveSessions: true,
      MySessions: false,
    })
  }

  onMySessionsClick() {
    this.setState({
      AllSessions: false,
      LiveSessions: false,
      MySessions: true,
    })
  }

  filter() {
    // render new fitered sessions
  }

  render() {
    return (
      <div className="Toggle-Container">
        <div 
          className="Toggle-Menu-Item" 
          onClick={this.onAllSessionsClick}
        >
          <input
            type="radio" 
            name="tabs" 
            checked={this.state.AllSessions}
            onChange={this.filter}
          />
          <label>All Sessions</label>
        </div>
        <div 
          className="Toggle-Menu-Item" 
          onClick={this.onLiveSessionsClick}
        >
          <input
            type="radio" 
            name="tabs"
            checked={this.state.LiveSessions}
            onChange={this.filter}
          />
          <label>Live Sessions</label>
        </div>
        <div 
          className="Toggle-Menu-Item" 
          onClick={this.onMySessionsClick}
        >
          <input 
            className="Toggle-Menu-Item" 
            type="radio" 
            name="tabs"
            checked={this.state.MySessions}
            onChange={this.filter}
          />
          <label>My Sessions</label>
        </div>
      </div>
    )
  }
}