import { INCREMENT, DECREMENT } from '../Types';
//type Action = { payload: {}| null; type: string}
const CounterReducer = (state = 0, action: any) => {
  switch (action.type) {
    case INCREMENT:
      return state + 1;
    case DECREMENT:
      return state - 1;
    default:
      return state;
  }
};

export default CounterReducer;
