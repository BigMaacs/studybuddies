import React, { PureComponent } from 'react';
import './ToggleViews.css'

export default class ToggleViews extends PureComponent {
  onClick() {
    //change route to page clicked on
  }

  render() {
    return (
      <div className="Toggle-Container">
        <div className="Toggle-Menu-Item" onClick={this.onClick}>
          <h1>All Sessions</h1>
        </div>
        <div className="Toggle-Menu-Item" onClick={this.onClick}>
          <h1>Live Sessions</h1>
        </div>
        <div className="Toggle-Menu-Item" onClick={this.onClick}>
          <h1>My Sessions</h1>
        </div>
      </div>
    )
  }
}