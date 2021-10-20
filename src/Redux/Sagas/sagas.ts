import {put, takeEvery} from 'redux-saga/effects';
import {SagaActions} from './enum';
import {failed, logOutSucceeded, signInSucceeded} from '../Auth/actions';

export function* workerSaga() {
  yield takeEvery(SagaActions.SignIn, signInUser);
  yield takeEvery(SagaActions.LogOut, logOutUser);
}

function* signInUser() {
  try {
    yield put(signInSucceeded(null));
  } catch (e) {
    yield put(failed('Some error'));
  }
}

function* logOutUser() {
  try {
    yield put(logOutSucceeded());
  } catch (e) {
    yield put(failed('Some error'));
  }
}
