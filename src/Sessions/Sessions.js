import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'
import Session from './Session/Session'
import './Sessions.css';

class Sessions extends PureComponent {
  static propTypes = {
    selected: PropTypes.string,
    sessions: PropTypes.array.isRequired,
    history: PropTypes.object,
  }

  static defaultProp = {
    selected: 'All Sessions'
  }

  renderSession() {
    const { history } = this.props;
    console.log(history, 'history', this.props);
    const { iWant } = this.props.user;
    const { sessionsList, currentView } = this.props.sessions;
    if (currentView === 'AllSessions') {
      return sessionsList.map((session, i) => <Session key={i} session={session} history={history}/> )
    }
    if (currentView === 'LiveSessions') {
      return sessionsList.filter((session) => session.status.live).map((sess, i) => {
        return <Session key={i} session={sess} history={history}/>
      })
    }
    return sessionsList.filter((session) => iWant.includes(session.category)).map((sess, i) => {
      return <Session key={i} session={sess} history={history}/>
    })
    return sessionsList.map((session, i) => <Session key={i} session={session} history={history} /> )

  }
  render() {
    return (
      <div className="Sessions-Container">
        { this.renderSession() }
      </div>
    )
  }
}

export default connect(({ sessions, user }) => ({ sessions, user }))(Sessions);
