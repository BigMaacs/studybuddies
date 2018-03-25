import React, { PureComponent } from 'react';
import './NavBar.css'

export default class NavBar extends PureComponent {
  onClick() {
    //change route to page clicked on
  }

  render() {
    return (
      <div className="Nav-Container">
        <div className="Nav-Menu-Item" onClick={this.onClick}>
          <h1>All Sessions</h1>
        </div>
        <div className="Nav-Menu-Item" onClick={this.onClick}>
          <h1>Live Sessions</h1>
        </div>
        <div className="Nav-Menu-Item" onClick={this.onClick}>
          <h1>My Sessions</h1>
        </div>
      </div>
    )
  }
}