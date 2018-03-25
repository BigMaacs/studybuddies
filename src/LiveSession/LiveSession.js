import React, { PureComponent } from 'react';
import PropTypes from 'prop-types'
import VideoNavBar from './components/VideoNavBar'
import './LiveSession.css'

export default class LiveSession extends PureComponent {
  static propTypes = {
    session: PropTypes.object,
    user: PropTypes.object,
  }

  static defaultProps = {
    session: { title: 'Session Title', author: { name: 'Author' } },
    user: { name: 'Users name' },
  }

  render() {
    const { session, user } = this.props
    return (
      <div className={"LiveSession-Container"}>
        <div className={"LiveSession-Nav-Bar"}>
          <VideoNavBar 
            sessionName={session.title}
            sessionAuthor={session.author.name}
            userName={user.name}
          />
        </div>
        <div className={"LiveSession-Main-Body"}>
          <div className={"LiveSession-Video-Stream"}>VIDEO BOX</div>
          <div className={"LiveSession-Chat-Box"}>CHAT BOX</div>
        </div>
        <div className={"LiveSession-Users"}>ATTENDING USERS</div>
      </div>
    )
  }
}