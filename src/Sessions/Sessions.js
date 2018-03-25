import React, { PureComponent } from 'react';
import PropTypes from 'prop-types'
import Session from './Session/Session'
import './Sessions.css';

export default class Sessions extends PureComponent {
  static propTypes = {
    selected: PropTypes.string,
    sessions: PropTypes.array.isRequired,
  }

  static defaultProp = {
    selected: 'All Sessions'
  }

  renderSession() {
    const { sessions } = this.props
    return sessions.map((session, i) => <Session key={i} session={session} /> )

  }
  render() {
    return (
      <div className="Sessions-Container">
        { this.renderSession() }
      </div>
    )
  }
}