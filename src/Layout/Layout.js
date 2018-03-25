import React, { PureComponent } from 'react';
import ToggleViews from '../ToggleViews'
import Filter from '../Filter'
import Sessions from '../Sessions'
import './Layout.css';

export default class Layout extends PureComponent {
  render() {
    const mockSessions = [
      { 
        id: 1,
        title: 'A Title One',
        description: 'Short description of video',
        category: 'React',
        status: {
          live: true,
          saved: false,
        },
      },
      {
        id: 2,
        title: 'A Title Two',
        description: 'Short description of video',
        category: 'React Native',
        status: {
          live: true,
          saved: true,
        },
      },
      {
        id: 3,
        title: 'A Title Three',
        description: 'Short description of video',
        category: 'Angular',
        status: {
          live: false,
          saved: true,
        },
      },
      {
        id: 4,
        title: 'A Title Four',
        description: 'Short description of video',
        category: 'MEAN Stack',
        status: {
          live: false,
          saved: false,
        },
      },
    ]
    return (
      <div className="Layout-Container">
        <div className="Top-Menu">
          <ToggleViews />
          <Filter />
          <Sessions history={this.props.history} sessions={mockSessions}/>
        </div>
      </div>
    )
  }
}
