export const signupReq = (userObj) => ({
  type: 'SIGNUP',
  userObj
});

export const toggleSessionView = (session) => ({
  type: 'TOGGLE_SESSIONS_VIEW',
  session
});
