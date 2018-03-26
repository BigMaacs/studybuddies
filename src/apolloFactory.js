import ApolloClient from 'react-apollo';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

export const buildClient = () => {
  const GRAPHQL_URL = 'https://data.absurdness49.hasura-app.io/v1alpha1/graphql'; //Replace <cluster-name> with the name of your cluster

  return new ApolloClient({
    link: createHttpLink({
      uri: GRAPHQL_URL,
      credentials: 'include' // Include this to send the cookie along with every request
    }),
    cache: new InMemoryCache({
      addTypename: false
    })
  });
}
