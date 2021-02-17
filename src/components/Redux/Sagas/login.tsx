import { call, put, takeEvery } from 'redux-saga/effects';
import { push } from 'connected-react-router';
import { LOGIN_USER, LOGIN_FALIURE, LOG_OUT, LOGIN_SUCCESS } from '../Types';
import { SIGN_IN, SIGN_OUT } from '../../Firebase/firebase_api';
import firebase from '../../Firebase/firebase';

const auth = firebase.auth();

function* login(action: any) {
  console.log('yield action', action.payload);
  try {
    const userData = yield call(SIGN_IN, action.payload);
    var user = auth.currentUser;
    if (user) {
      yield put({ type: LOGIN_SUCCESS, data: userData });
    } else {
      yield put({ type: LOGIN_FALIURE, data: {} });
    }
    yield put(push('/'));
  } catch (error) {
    yield put({ type: LOGIN_FALIURE, data: error.message });
  }
}

function* logOut(action: any) {
  console.log('saga logout');
  yield call(SIGN_OUT);
  yield put(push('/login'));
}

function* loginSaga() {
  yield takeEvery(LOGIN_USER, login);
  yield takeEvery(LOG_OUT, logOut);
}

export default loginSaga;
