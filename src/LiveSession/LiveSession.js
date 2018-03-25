import React, { PureComponent } from 'react';
import './LiveSession.css';
import App from './LiveVideo.js';

export default class LiveSession extends PureComponent {
  render() {
    return (
      <div className={"LiveSession-Container"}>
          <App />
      </div>
    )
  }
}
