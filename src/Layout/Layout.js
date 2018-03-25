import React, { PureComponent } from 'react';
import ToggleViews from '../ToggleViews'
import Filter from '../Filter'
import './Layout.css';

export default class Layout extends PureComponent {
  render() {
    return (
      <div className="Layout-Container">
        <div className="Top-Menu">
          <ToggleViews />
          <Filter />
        </div>
      </div>
    )
  }
}