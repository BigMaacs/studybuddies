const initialState = {
  username: '',
  email: '',
  loggedIn: false,
  buddies: [],
  iKnow: [],
  iWant: []
};

export default function (state = initialState, action) {
  switch (action.type) {
    case 'SIGNUP':
      return Object.assign({}, state, action.userObj)

    default:
      return state;
  }

}
