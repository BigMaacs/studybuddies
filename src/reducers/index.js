import { combineReducers } from 'redux';
import user from './user';
import sessions from './sessions';
import { buildClient } from '../apolloFactory'

const client = buildClient()

const rootReducer = combineReducers({
  user,
  sessions,
  apollo: client.reducer(),
});

export default rootReducer;
