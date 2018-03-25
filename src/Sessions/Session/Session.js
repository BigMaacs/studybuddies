import React, { PureComponent } from 'react';
import PropTypes from 'prop-types'
import './Session.css';

export default class Session extends PureComponent {
  static propTypes = {
    session: PropTypes.object,
  }

  static defaultProp = {
    session: {},
  }

  renderActions() {
    return (
      <div>Save, View</div>
    )
  }

  render() {
    const { session } = this.props

    return (
      <div className="Session-Container">
        <div className="Session-Title">{ session.title } </div>
        <div className="Session-Description">
          <div className="Session-Description-Category">
            {session.category}
          </div>
          <div className="Session-Description-Text">
            {session.description} 
          </div>
        </div>
        <div className="Session-Actions">{ this.renderActions() } </div>
      </div>
    )
  }
}