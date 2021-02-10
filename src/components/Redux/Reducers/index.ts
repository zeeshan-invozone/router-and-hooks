import CounterReducer from './CounterReducer';
import { combineReducers } from 'redux';
import UserReducer from './UserReducer';
const allReducer = combineReducers({
  counter: CounterReducer,
  user: UserReducer,
});

export default allReducer;
