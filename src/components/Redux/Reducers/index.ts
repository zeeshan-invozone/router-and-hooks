import CounterReducer from './CounterReducer';
import { combineReducers } from 'redux';
import UserReducer from './UserReducer';
import { connectRouter } from 'connected-react-router';

const allReducer = (history: any) =>
  combineReducers({
    count: CounterReducer,
    router: connectRouter(history),
    user: UserReducer,
  });

export default allReducer;
