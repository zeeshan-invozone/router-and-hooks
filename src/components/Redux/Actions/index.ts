import { INCREMENT, DECREMENT, ADD_USER } from '../Types';
export const increment = () => {
  return { type: INCREMENT };
};

export const decrement = () => {
  return {
    type: DECREMENT,
  };
};

export const addData = (data: any) => {
  console.log(data);
  return {
    type: ADD_USER,
    payload: data,
  };
};
