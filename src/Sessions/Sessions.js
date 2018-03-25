import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
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
    sessions: PropTypes.array.isRequired,
    history: PropTypes.object,
    data: PropTypes.object,
    selectedCategory: PropTypes.object,
  }

  static defaultProp = {
    selected: 'All Sessions'
  }

  renderSession() {
    const { history } = this.props;
    console.log(history, 'history', this.props);
    const { iWant } = this.props.user;
    const { sessionsList, currentView } = this.props.sessions;
    if (currentView === 'AllSessions') {
      return sessionsList.map((session, i) => <Session key={i} session={session} history={history}/> )
    }
    if (currentView === 'LiveSessions') {
      return sessionsList.filter((session) => session.status.live).map((sess, i) => {
        return <Session key={i} session={sess} history={history}/>
      })
    }
    return sessionsList.filter((session) => iWant.includes(session.category)).map((sess, i) => {
      return <Session key={i} session={sess} history={history}/>
    })
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

// <<<<<<< HEAD
// export default connect(({ sessions, user }) => ({ sessions, user }))(Sessions);
// =======
export default Sessions
// >>>>>>> Got graphql filter queries to work
