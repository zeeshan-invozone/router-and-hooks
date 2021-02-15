import loginSaga from '../Sagas/login';
import { all } from 'redux-saga/effects';

export default function* rootSaga() {
  yield all([loginSaga()]);
}
