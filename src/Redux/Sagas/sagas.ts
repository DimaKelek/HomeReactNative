import {takeEvery} from 'redux-saga/effects';
import {SagaActions} from './enum';

export function* workerSaga() {
  yield takeEvery(SagaActions.SignIn, signInUser);
}

function* signInUser() {}
