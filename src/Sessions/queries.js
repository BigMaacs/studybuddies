import gql from 'graphql-tag'

export const QUERY_ALL_SESSIONS = gql`
  query {
    session {
      id
      title
      description
      scheduled_start
      scheduled_end
      author_user {
        name
      }
      session_subject_categories {
        subject_category {
          name
        }
      }
      no_members {
        count
      }
    }
  }
`

export const QUERY_SESSION_BY_CATEGORY = gql`
    query($categoryId: Int!) {
    session(where: 
      { session_subject_categories: 
        { subject_category:
          {
            id: {_eq: $categoryId}
          }
        }
      }) {
      id
      title
      description
      scheduled_start
      scheduled_end
      author_user {
        name
      }
      session_subject_categories {
        subject_category {
          name
        }
      }
      no_members {
        count
      }
    }
  }
`