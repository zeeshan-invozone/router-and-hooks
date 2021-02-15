import { call, put, takeEvery } from 'redux-saga/effects';
import { push } from 'connected-react-router';
import { LOGIN_SUCCESS, LOGIN_FALIURE } from '../Types';
import { SIGN_IN, SIGN_OUT } from '../../Firebase/firebase_api';
import firebase from '../../Firebase/firebase';

const auth = firebase.auth();

function* login(action: any) {
  try {
    const Data = yield call(SIGN_IN, action.payload);
    var user = auth.currentUser;
    if (user) {
      yield put({ type: LOGIN_SUCCESS, currentUser: user });
    } else {
      yield put({ type: LOGIN_FALIURE, currentUser: {} });
    }
    yield put({ type: 'LOGIN_USER_SUCCESS', login_value: Data });

    yield put(push('/'));
  } catch (e) {
    yield put({ type: 'LOGIN_FAILED', message_value: e.message });
  }
}

function* logout(action: any) {
  yield call(SIGN_OUT, action.payload);
  var user = auth.currentUser;
  if (user) {
    yield put({ type: LOGIN_SUCCESS, currentUser: user });
  } else {
    yield put({ type: LOGIN_FALIURE, currentUser: {} });
  }
}

function* loginSaga() {
  yield takeEvery('LOGIN_USER', login);
  yield takeEvery('LOGOUT_USER', logout);
}

export default loginSaga;
