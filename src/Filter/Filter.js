import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import Dropdown from 'react-dropdown'
import 'react-dropdown/style.css'
import { graphql } from 'react-apollo'
import { QUERY_SUBJECT_CATEGORY } from './queries'
import { CATEGORIES } from '../constants'
import './Filter.css'

export class FilterDropdown extends PureComponent {
  static propTypes = {
    data: PropTypes.object,
    onChange: PropTypes.func,
  }

  static defaultProps = {
    data: {}
  }

  constructor(props) {
    super(props)
    this.onSelect = this.onSelect.bind(this)
  }

  onSelect(data) {
    const { onChange } = this.props
    if (onChange) {
      onChange(data)
    }
  }

  renderDropdown() {
    const { loading, error, subject_category } = this.props.data

    if (loading) {
      return (<p>Loading...</p>)
    } else if (error) {
      return (<p>Error loading categories: {error.message}</p>)
    } else {
      const categories = subject_category.map(({id, name}) => ({ value: id, label: name }))
      return (
        <Dropdown
          options={categories}
          onChange={this.onSelect}
          placeholder="Filter by category"
        />
      )
    }
  }

  render() {
    return (
      <div className="Filter-Container">
        {this.renderDropdown()}
      </div>
    )
  }
}

const Filter = graphql(QUERY_SUBJECT_CATEGORY)(FilterDropdown)

export default Filter
