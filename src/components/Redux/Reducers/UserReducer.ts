import { ADD_USER } from '../Types';
const UserReducer = (state = {}, action: any) => {
  switch (action.type) {
    case ADD_USER:
      console.log('reducer:', action);
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
};

export default UserReducer;
