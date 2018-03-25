import React, { PureComponent } from 'react';
import './LiveSession.css'

export default class LiveSession extends PureComponent {
  render() {
    return (
      <div className={"LiveSession-Container"}>
        <div className={"LiveSession-Nav-Bar"}>NAV BAR</div>
        <div className={"LiveSession-Main-Body"}>
          <div className={"LiveSession-Video-Stream"}>VIDEO BOX</div>
          <div className={"LiveSession-Chat-Box"}>CHAT BOX</div>
        </div>
        <div className={"LiveSession-Users"}>ATTENDING USERS</div>
      </div>
    )
  }
}