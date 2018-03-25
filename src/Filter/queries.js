import gql from 'graphql-tag'

export const QUERY_SUBJECT_CATEGORY = gql`
  query {
    subject_category {
      id
      name
    }
  }
`