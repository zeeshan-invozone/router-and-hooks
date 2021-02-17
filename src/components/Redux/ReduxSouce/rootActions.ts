import { createActions } from 'reduxsauce';

export const { Types, Creators } = createActions({
  loginRequest: ['username', 'password'],
  loginSuccess: ['username'],
  loginFailure: ['error'],
  logout: null,
  withdrawTwenty: null,
  depositCash: ['payload'],
});
