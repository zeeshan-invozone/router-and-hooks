type Action = { type: 'INCREMENT' } | { type: 'DECREMENT' };
const CounterReducer = (state = 0, action: Action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }
};

export default CounterReducer;
