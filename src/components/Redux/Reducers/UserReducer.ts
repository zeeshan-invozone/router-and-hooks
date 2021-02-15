import { ADD_USER } from '../Types';
const UserReducer = (state = {}, action: any) => {
  switch (action.type) {
    case ADD_USER:
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
};

export default UserReducer;
