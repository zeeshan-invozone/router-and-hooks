import { LOGIN_USER, LOG_OUT } from '../Types';
const initialState = {
  isLogged: false,
  userInfo: {},
  error: '',
};
const UserReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case LOGIN_USER:
      return {
        ...state,
        userInfo: action.payload,
        isLogged: true,
      };
    case LOG_OUT:
      return {
        ...state,
        userInfo: {},
        isLogged: false,
      };
    default:
      return state;
  }
};

export default UserReducer;
