import React, { PureComponent } from 'react';
import PropTypes from 'prop-types'
import Session from './Session/Session'
import './Sessions.css';

export default class Sessions extends PureComponent {
  static propTypes = {
    selected: PropTypes.string,
    sessions: PropTypes.array.isRequired,
    history: PropTypes.object,
  }

  static defaultProp = {
    selected: 'All Sessions'
  }

  renderSession() {
    const { sessions, history } = this.props
    return sessions.map((session, i) => <Session key={i} session={session} history={history} /> )

  }
  render() {
    return (
      <div className="Sessions-Container">
        { this.renderSession() }
      </div>
    )
  }
}