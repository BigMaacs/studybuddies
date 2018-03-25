const mockSessions = [
  {
    "id": 1,
    "title": "Intro to React",
    "description": "React is one of the hottest web frameworks today. Come learn!",
    "scheduled_start": "2018-03-25T10:00:00+00:00",
    "scheduled_end": "2018-03-25T12:00:00+00:00",
    "author_user": {
      "name": "Tanmai"
    },
    "session_subject_categories": [
      {
        "subject_category": {
          "name": "React"
        }
      }
    ],
    "no_members": {
      "count": 2
    },
    status: {
      saved: false,
      live: false,
    },
  },
  {
    "id": 2,
    "title": "Vue.js - The best of Angular and React",
    "description": "You'll see why it's the best of both worlds!",
    "scheduled_start": "2018-03-25T08:00:00+00:00",
    "scheduled_end": "2018-03-25T10:00:00+00:00",
    "author_user": {
      "name": "Anye"
    },
    "session_subject_categories": [
      {
        "subject_category": {
          "name": "React"
        }
      },
      {
        "subject_category": {
          "name": "vue"
        }
      },
      {
        "subject_category": {
          "name": "angular"
        }
      }
    ],
    "no_members": {
      "count": 1
    },
    status: {
      saved: false,
      live: false,
    },
  },
  {
    "id": 3,
    "title": "Using Apollo with React and Redux",
    "description": "Learn how to use the Apollo client",
    "scheduled_start": "2018-03-25T08:00:00+00:00",
    "scheduled_end": "2018-03-26T15:00:00+00:00",
    "author_user": {
      "name": "Beth"
    },
    "session_subject_categories": [
      {
        "subject_category": {
          "name": "Redux"
        }
      }
    ],
    "no_members": {
      "count": 1
    },
    status: {
      saved: false,
      live: false,
    },
  },
  {
    "id": 4,
    "title": "Intro to CSS Preprocessors",
    "description": "Do more CSS faster!",
    "scheduled_start": "2018-03-27T07:00:00+00:00",
    "scheduled_end": "2018-03-27T09:00:00+00:00",
    "author_user": {
      "name": "Beth"
    },
    "session_subject_categories": [
      {
        "subject_category": {
          "name": "CSS"
        }
      }
    ],
    "no_members": {
      "count": 2
    },
    status: {
      saved: false,
      live: true,
    },
  },
  {
    "id": 5,
    "title": "Optimizing Query Performance in PostgreSQL",
    "description": "Identify the slowest performing queries and make them faster",
    "scheduled_start": "2018-03-29T13:00:00+00:00",
    "scheduled_end": "2018-03-29T14:00:00+00:00",
    "author_user": {
      "name": "Beth"
    },
    "session_subject_categories": [
      {
        "subject_category": {
          "name": "Postgresql"
        }
      }
    ],
    "no_members": {
      "count": 1
    },
    status: {
      saved: false,
      live: false,
    },
  },
  {
    "id": 6,
    "title": "Hackathon Pitching 101",
    "description": "Win the audience over, win the hackathon.",
    "scheduled_start": "2018-03-29T20:00:00+00:00",
    "scheduled_end": "2018-03-29T22:00:00+00:00",
    "author_user": {
      "name": "Ben"
    },
    "session_subject_categories": [
      {
        "subject_category": {
          "name": "Presenting",
        },
      },
    ],
    "no_members": null,
    status: {
      saved: true,
      live: false,
    },
  },
  {
    "id": 7,
    "title": "Exploring Tokbox's Features",
    "description": "It's easy to start using Tokbox. You'll see how in this session.",
    "scheduled_start": "2018-03-28T10:00:00+00:00",
    "scheduled_end": "2018-03-28T12:00:00+00:00",
    "author_user": {
      "name": "Manik"
    },
    "session_subject_categories": [
      {
        "subject_category": {
          "name": "Tokebox",
        },
      },
    ],
    "no_members": {
      "count": 2
    },
    status: {
      saved: false,
      live: false,
    },
  },
  {
    "id": 8,
    "title": "Hasura's API-Console In-Depth",
    "description": "Overview of Hasura's console",
    "scheduled_start": "2018-03-27T03:00:00+00:00",
    "scheduled_end": "2018-03-27T04:30:00+00:00",
    "author_user": {
      "name": "Tanmai"
    },
    "session_subject_categories": [
        {
          "subject_category": {
            "name": "Hasura",
          },
        },
    ],
    "no_members": null,
    status: {
      saved: true,
      live: true,
    },
  },
  {
    "id": 9,
    "title": "How to be Very Thorough",
    "description": "Learn from a documentation engineer on how thoroughness wins.",
    "scheduled_start": "2018-03-25T14:00:00+00:00",
    "scheduled_end": "2018-03-25T20:00:00+00:00",
    "author_user": {
      "name": "Jessica"
    },
    "session_subject_categories": [
        {
          "subject_category": {
            "name": "Organization",
          },
        },
    ],
    "no_members": null,
    status: {
      saved: false,
      live: true,
    },
  },
  {
    "id": 10,
    "title": "StudyBuddies FTW",
    "description": "Tired of outdated YouTube tutorials? Say no more, fam. Ask live questions on StudyBuddies and learn all you ever wanted to know.",
    "scheduled_start": "2018-03-25T02:00:00+00:00",
    "scheduled_end": "2018-03-25T22:00:00+00:00",
    "author_user": {
      "name": "Iris"
    },
    "session_subject_categories": [
        {
          "subject_category": {
            "name": "Intro",
          },
        },
    ],
    "no_members": {
      "count": 10
    },
    status: {
      saved: true,
      live: true,
    },
  }
]


const initialState = {
  currentView: 'AllSessions',
  sessionsList: mockSessions
};

export default function (state = initialState, action) {
  switch (action.type) {
    case 'TOGGLE_SESSIONS_VIEW':
      return Object.assign({}, state, {
        currentView: action.session
      });
    default:
      return state;
  }

}
