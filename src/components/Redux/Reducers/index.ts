import CounterReducer from './CounterReducer';
import { combineReducers } from 'redux';
import UserReducer from './UserReducer';
import { connectRouter } from 'connected-react-router';
import { getDataReducer } from './GetData';
const allReducer = (history: any) =>
  combineReducers({
    count: CounterReducer,
    router: connectRouter(history),
    user: UserReducer,
    getData: getDataReducer,
  });

export default allReducer;
