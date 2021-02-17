import { createReducer, createActions } from 'reduxsauce';
import Types from './Types';
const INITIAL_STATE = { balance: 100 };

const depositCash = (state = INITIAL_STATE, action: any) => {
  return { ...state, balance: state.balance + action.payload };
};

const withdrawTwenty = (state = INITIAL_STATE, action: any) => {
  return { ...state, balance: state.balance - 20 };
};

const HANDLERS = {
  [Types.DEPOSIT_CASH]: depositCash,
  [Types.WITHDRAW_TWENTY]: withdrawTwenty,
};

export const reducer = createReducer(INITIAL_STATE, HANDLERS);
