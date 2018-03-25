import React, { PureComponent } from 'react';
import PropTypes from 'prop-types'
import './VideoNavBar.css'

export default class VideoNavBar extends PureComponent {
  static propTypes = {
    sessionName: PropTypes.string,
    sessionAuthor: PropTypes.string,
    userName: PropTypes.string,
  }
  render() {
    const { userName, sessionName, sessionAuthor } = this.props

    return (
      <div className="LiveSession-VideoNavBar-Message">
        {`Welcome ${userName} you are currently viewing ${sessionName} presented by ${sessionAuthor}`}
      </div>
    )
  }
}