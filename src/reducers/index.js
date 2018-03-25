import { combineReducers } from 'redux';
import { ApolloClient } from 'react-apollo'
import user from './user';
import sessions from './sessions';


const client = new ApolloClient();

const rootReducer = combineReducers({
  user,
  sessions,
  apollo: client.reducer(),
});

export default rootReducer;
