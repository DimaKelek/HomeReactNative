import {put, takeEvery} from 'redux-saga/effects';
import {SagaActions} from './enum';
import {failed, logOutSucceeded, signInSucceeded} from '../Auth/actions';

export function* workerSaga() {
  yield takeEvery(SagaActions.SignIn, signInUserSaga);
  yield takeEvery(SagaActions.LogOut, logOutUserSaga);
}

function* signInUserSaga() {
  try {
    yield put(signInSucceeded(null));
  } catch (e) {
    yield put(failed('Some error'));
  }
}

function* logOutUserSaga() {
  try {
    yield put(logOutSucceeded());
  } catch (e) {
    yield put(failed('Some error'));
  }
}
