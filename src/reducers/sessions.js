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