import React, { PureComponent } from 'react';
import ToggleViews from '../ToggleViews'
import Filter from '../Filter'
import {Sessions} from '../Sessions'
import './Layout.css';

export default class Layout extends PureComponent {

  constructor(props) {
    super(props)
    this.state = {
      selectedCategory: ''
    }

    this.handleCategoryChange = this.handleCategoryChange.bind(this)
  }

  handleCategoryChange(category) {
    if (category) {
      this.setState({
        selectedCategory: { id: category.value, name: category.label }
      })
    }
  }

  render() {
    const { selectedCategory } = this.state

    return (
      <div className="Layout-Container">
        <div className="Top-Menu">
          <ToggleViews />
          <Filter onChange={this.handleCategoryChange} />
          <Sessions
            history={this.props.history}
            selectedCategory={this.state.selectedCategory} 
          />
        </div>
      </div>
    )
  }
}
