import React, { PureComponent } from 'react';
import NavBar from '../NavBar'
import './Layout.css';

export default class Layout extends PureComponent {
  render() {
    return (
      <div className="Layout-Container">
        <div className="Top-Menu">
          <NavBar />
        </div>
      </div>
    )
  }
}
