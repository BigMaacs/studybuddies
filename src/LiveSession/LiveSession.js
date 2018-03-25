import React, { PureComponent } from 'react';
import './LiveSession.css';
import App from './LiveVideo.js';

export default class LiveSession extends PureComponent {
  render() {
    return (
      <div className={"LiveSession-Container"}>
        <div className={"LiveSession-Nav-Bar"}>NAV BAR</div>
        <div className={"LiveSession-Main-Body"}>
          <div className={"LiveSession-Video-Stream"}><App/></div>
          <div className={"LiveSession-Chat-Box"}>CHAT BOX</div>
        </div>
        <div className={"LiveSession-Users"}>ATTENDING USERS</div>
      </div>
    )
  }
}

// <div className={"LiveSession-Video-Stream"}>VIDEO BOX</div> GilK