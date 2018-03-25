import React, { PureComponent } from 'react';
import Dropdown from 'react-dropdown'
import 'react-dropdown/style.css'
import { CATEGORIES } from '../constants'
import './Filter.css'

export default class Filter extends PureComponent {
  onSelect() {
    //trigger a filter by available categories
  }

  render() {
    return (
      <div className="Filter-Container">
        <Dropdown options={CATEGORIES} onChange={this.onSelect} placeholder="Filter by category" />
      </div>
    )
  }
}