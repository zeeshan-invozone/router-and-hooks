import { LOGIN_USER, LOG_OUT, LOGIN_FALIURE, LOGIN_SUCCESS } from '../Types';
const initialState = {
  isLogged: false,
  loggedData: {},
  error: '',
};
const UserReducer = (state = initialState, action: any) => {
  console.log('user reducer action', action.payload);
  switch (action.type) {
    case LOGIN_USER:
      return {
        ...state,
        loggedData: action.payload,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        loggedData: action.data,
        isLogged: true,
        error: '',
      };
    case LOGIN_FALIURE:
      return {
        ...state,
        isLogged: false,
        loggedData: {},
        error: action.data,
      };
    case LOG_OUT:
      return {
        ...state,
        loggedData: {},
        isLogged: false,
      };
    default:
      return state;
  }
};

export default UserReducer;
