import { createActions } from 'reduxsauce';

export const { Types, Creators } = createActions({
  loginRequest: ['payload'],
  loginSuccess: ['username'],
  loginFailure: ['error'],
  logout: null,
});
