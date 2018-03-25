import React, { PureComponent } from 'react'
import GraphiQL from 'graphiql'
import fetch from 'isomorphic-fetch'
import graphiQLStyles from '../node_modules/graphiql/graphiql.css'

export default class GraphiQLWrapper extends PureComponent {
  async handleFetcher(params) {
    // return fetch(window.location.origin + '/graphql', {
    //   method: 'post',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(graphQLParams),
    // }).then(response => response.json());

    try {
      const response = await fetch('https://data.absurdness49.hasura-app.io/v1alpha1/graphql', {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(params),
      })
      return response.json()
    } catch (e) {
      return e
    }
  }

  render() {
    return (
      <GraphiQL fetcher={this.handleFetcher} />
    )
  }
}
