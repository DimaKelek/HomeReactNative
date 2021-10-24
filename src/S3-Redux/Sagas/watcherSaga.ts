import {takeLatest} from 'redux-saga/effects';
import {SagaActions} from '../enum';
import {signUpSaga} from './signUpSaga';
import {logOutUserSaga} from './logOutUserSaga';
import {signInUserSaga} from './signInSaga';
import {getUserDataSaga} from './getUserDataSaga';

export function* watcherSaga() {
  yield takeLatest(SagaActions.SignIn, signInUserSaga);
  yield takeLatest(SagaActions.LogOut, logOutUserSaga);
  yield takeLatest(SagaActions.GetUserData, getUserDataSaga);
  yield takeLatest(SagaActions.SignUp, signUpSaga);
}
