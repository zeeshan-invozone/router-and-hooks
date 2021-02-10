export const increment = () => {
  return { type: 'INCREMENT' };
};

export const decrement = () => {
  return {
    type: 'DECREMENT',
  };
};

export const addData = (data: any) => {
  return {
    type: 'ADD_USER',
    data,
  };
};
