import {SignInUserSagaAction} from './Sagas.types';
import {call, put} from 'redux-saga/effects';
import {setError} from '../Auth/actions';
import {firebaseErrorHandler} from 'utils/errorHandler';
import {signInFirebase} from 'Firebase/firebase';

export function* signInUserSaga(action: ReturnType<SignInUserSagaAction>) {
  try {
    yield call(signInFirebase, action.email, action.password);
    yield put(setError(null));
  } catch (e: any) {
    yield put(setError(firebaseErrorHandler(e.code)));
  }
}
