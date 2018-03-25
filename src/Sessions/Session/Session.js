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

  handleSaveToggle = () => {
    this.props.session.status.saved = !this.props.session.status.saved
  }

    renderActions() {
    const { saved, live } = this.props.session.status
    return (
      <div className="Session-Actions">
        { !saved &&
          <button 
            className="Session-actionButton" 
            onClick={this.handleSaveToggle}
          >
            Save
          </button>
        }
        { saved &&
          <button 
            className="Session-actionButton"
            onClick={this.handleRemoveToggle}
          >
            Remove
          </button>
        }
        { live &&
          <button 
            className="Session-actionButton" 
            onClick={this.handleViewClick}
          >
            Join Session
          </button>
        }
      </div>
    )
  }

  render() {
    const { session } = this.props
    return (
      <div className="Session-Container">
        <div className="Session-Title">
          <span>{ session.title }</span>
          <span>Presented by:</span>
          <span>{session.author_user.name}</span>
        </div>
        <div className="Session-Description">
          <div className="Session-Description-Category">
            {session.session_subject_categories[0].subject_category.name}
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