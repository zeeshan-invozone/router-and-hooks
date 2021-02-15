import { AcUnitTwoTone } from '@material-ui/icons';
import { GET_DATA } from '../Types';
const getDataReducer = (state = {}, action: any) => {
  switch (action.type) {
    case GET_DATA:
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
};

export { getDataReducer };
