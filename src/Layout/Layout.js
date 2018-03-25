import React, { PureComponent } from 'react';
import ToggleViews from '../ToggleViews'
import Filter from '../Filter'
import Sessions from '../Sessions'
import './Layout.css';

export default class Layout extends PureComponent {
  render() {
    const mockSessions = [
      {
        title: 'A Title One',
        description: 'Short description of video',
        category: 'React'
      },
      {
        title: 'A Title Two',
        description: 'Short description of video',
        category: 'React Native'
      },
      {
        title: 'A Title Three',
        description: 'Short description of video',
        category: 'Angular'
      },
      {
        title: 'A Title Four',
        description: 'Short description of video',
        category: 'MEAN Stack'
      },
    ]
    return (
      <div className="Layout-Container">
        <div className="Top-Menu">
          <ToggleViews />
          <Filter />
          <Sessions sessions={mockSessions}/>
        </div>
      </div>
    )
  }
}
