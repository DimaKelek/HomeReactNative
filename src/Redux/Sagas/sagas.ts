import {call, put, takeEvery} from 'redux-saga/effects';
import {
  getFirebaseUserData,
  logOutFireBase,
  signInFirebase,
  signUpFirebase,
} from '../../S1-Firebase/firebase';
import {UserType} from '../Auth/types';
import {setError, setUserData} from '../Auth/actions';
import {SagaActions} from '../enum';
import {SignUpFormType} from '../../Screens/Registration/RegistrationView';

export function* workerSaga() {
  yield takeEvery<any>(SagaActions.SignIn, signInUserSaga);
  yield takeEvery<any>(SagaActions.LogOut, logOutUserSaga);
  yield takeEvery<any>(SagaActions.GetUserData, getUserDataSaga);
  yield takeEvery<any>(SagaActions.SignUp, signUpSaga);
}

function* signInUserSaga(action: any) {
  try {
    yield call(signInFirebase, action.email, action.password);
    yield put(setError(null));
  } catch (e: any) {
    //вынести в обработчик
    if (e.code === 'auth/user-not-found') {
      yield put(
        setError({
          code: e.code,
          message:
            'User not found or you entered the wrong data. If you haven`t account you can create it!',
        }),
      );
    }
  }
}

function* signUpSaga(action: any) {
  try {
    yield call(signUpFirebase, action.values);
  } catch (e) {}
}

function* logOutUserSaga() {
  try {
    yield call(logOutFireBase);
    yield put(setUserData(null));
    yield put(setError(null));
  } catch (e) {
    console.log('Error logOut');
  }
}

function* getUserDataSaga(action: any) {
  try {
    const userData: UserType = yield call(getFirebaseUserData, action.userID);
    yield put(setUserData(userData));
  } catch (e) {
    console.log(e);
  }
}
