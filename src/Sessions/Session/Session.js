import React, { PureComponent } from 'react';
import PropTypes from 'prop-types'
import './Session.css';

export default class Session extends PureComponent {
  static propTypes = {
    session: PropTypes.object,
    history: PropTypes.object,
  }

  static defaultProp = {
    session: {},
  }

  handleViewClick = () => {
    this.props.history.push(`/session/:${this.props.session.id}`)
  }
  renderActions() {
    const { saved, live } = this.props.session
    return (
      <div className="Session-Actions">
        { !saved &&
          <button className="Session-actionButton">Save</button>
        }
        { saved &&
          <button className="Session-actionButton">Remove</button>
        }
        { !live &&
          <button className="Session-actionButton" onClick={this.handleViewClick}>View</button>
        }
      </div>
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
        { this.renderActions() }
      </div>
    )
  }
}