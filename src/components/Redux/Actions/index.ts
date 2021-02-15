import { INCREMENT, DECREMENT, LOGIN_USER, GET_DATA, LOG_OUT } from '../Types';
import Axios from 'axios';
export const increment = () => {
  return { type: INCREMENT };
};

export const decrement = () => {
  return {
    type: DECREMENT,
  };
};

export const addData = (data: any) => {
  return {
    type: LOGIN_USER,
    payload: data,
  };
};

export const logout = () => {
  console.log('logout');
  return {
    type: LOG_OUT,
  };
};

export const getData = () => {
  return async (dispatch: any) => {
    const res = await Axios.get('https://jsonplaceholder.typicode.com/posts');
    dispatch({
      type: GET_DATA,
      payload: res.data,
    });
  };
};
