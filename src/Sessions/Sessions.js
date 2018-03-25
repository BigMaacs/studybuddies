import React, { PureComponent } from 'react';
import PropTypes from 'prop-types'
import { graphql, Query } from 'react-apollo'
import Session from './Session/Session'
import { 
  QUERY_ALL_SESSIONS,
  QUERY_SESSION_BY_CATEGORY,
} from './queries'
import './Sessions.css';

class Sessions extends PureComponent {
  static propTypes = {
    selected: PropTypes.string,
    data: PropTypes.object,
    selectedCategory: PropTypes.object,
  }

  static defaultProp = {
    selected: 'All Sessions'
  }

  renderSession() {
    const { loading, error, session } = this.props.data

    if (loading) {
      return <p>Loading...</p>
    } else if (error) {
      return <p>Error loading sessions: {error.message}</p>
    } else {
      return session.map((s, i) => (<Session key={i} session={s} />))
    }
  }

  get queryProps() {
    const { selectedCategory } = this.props
    let queryProps = {
      query: selectedCategory ?
        QUERY_SESSION_BY_CATEGORY:
        QUERY_ALL_SESSIONS
    }

    if (selectedCategory) {
      queryProps.variables = {
        categoryId: selectedCategory.id
      }
    }

    return queryProps
  }

  reRenderSession({loading, error, data}) {
    if (loading) {
      return <p>Loading...</p>
    } else if (error) {
      return <p>Error loading sessions: {error.message}</p>
    } 

    return data.session.map((s, i) => (<Session key={i} session={s} />))
  }

  render() {
    return (
      <div className="Sessions-Container">
        <Query
          {...this.queryProps}
        >
          { this.reRenderSession }
        </Query>
      </div>
    )
  }
}

export default Sessions