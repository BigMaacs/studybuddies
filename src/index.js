import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import ApolloClient from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { ApolloProvider } from 'react-apollo';
import { InMemoryCache } from 'apollo-cache-inmemory';

const GRAPHQL_URL = 'https://data.absurdness49.hasura-app.io/v1alpha1/graphql'; //Replace <cluster-name> with the name of your cluster

const client = new ApolloClient({
  link: createHttpLink({
    uri: GRAPHQL_URL,
    credentials: 'include' // Include this to send the cookie along with every request
  }),
  cache: new InMemoryCache({
    addTypename: false
  })
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root'));
registerServiceWorker();
