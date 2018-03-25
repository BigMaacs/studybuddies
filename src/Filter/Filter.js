import React, { PureComponent } from 'react';
import Dropdown from 'react-dropdown'
import 'react-dropdown/style.css'
import './Filter.css'

export default class Filter extends PureComponent {
  onSelect() {
    //trigger a filter by available categories
  }

  render() {
    const options = ['React', 'React Native', 'Angular']
    return (
      <div className="Filter-Container">
        <Dropdown options={options} onChange={this.onSelect} placeholder="Filter by category" />
      </div>
    )
  }
}