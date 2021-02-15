import { INCREMENT, DECREMENT, ADD_USER, GET_DATA } from '../Types';
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
    type: ADD_USER,
    payload: data,
  };
};

export const getData = () => {
  return async (dispatch: any) => {
    const res = await Axios.get('https://jsonplaceholder.typicode.com/todos');
    dispatch({
      type: GET_DATA,
      payload: res.data,
    });
  };
};
