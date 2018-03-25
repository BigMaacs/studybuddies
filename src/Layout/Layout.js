import React, { PureComponent } from 'react';
import ToggleViews from '../ToggleViews'
import Filter from '../Filter'
import Sessions from '../Sessions'
import './Layout.css';

export default class Layout extends PureComponent {
  render() {
    return (
      <div className="Layout-Container">
        <div className="Top-Menu">
          <ToggleViews />
          <Filter />
          <Sessions history={this.props.history}/>
        </div>
      </div>
    )
  }
}
