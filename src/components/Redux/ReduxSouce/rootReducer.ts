import { createReducer } from 'reduxsauce';
import Types from './Types';
const INITIAL_STATE = {
  islogged: false,
  user: {},
  error: '',
};

const loginRequest = (state = INITIAL_STATE, action: any) => {
  console.log('login action', action.payload);
  return {
    ...state,
    islogged: false,
    user: action.payload,
    error: '',
  };
};
const loginSuccess = (state = INITIAL_STATE, action: any) => {
  console.log('login action', action.payload);
  return {
    ...state,
    islogged: true,
    user: action.payload,
    error: '',
  };
};
const loginFailure = (state = INITIAL_STATE, action: any) => {
  console.log('login action', action.payload);
  return {
    ...state,
    user: {},
    islogged: false,
    error: action.payload,
  };
};

const logout = (state = INITIAL_STATE, action: any) => {
  return {
    ...state,
    user: {},
    islogged: false,
    error: '',
  };
};

const HANDLERS = {
  [Types.LOGIN_REQUEST]: loginRequest,
  [Types.LOGIN_SUCCESS]: loginSuccess,
  [Types.LOGIN_FAILURE]: loginFailure,
  [Types.LOGOUT]: logout,
};

export const reducer = createReducer(INITIAL_STATE, HANDLERS);
