import {SignInUserSagaAction} from './types';
import {call, put} from 'redux-saga/effects';
import {signInFirebase} from '../../S1-Firebase/firebase';
import {setError} from '../Auth/actions';
import {firebaseErrorHandler} from '../../Common/Utils/errorHandler';

export function* signInUserSaga(action: ReturnType<SignInUserSagaAction>) {
  try {
    yield call(signInFirebase, action.email, action.password);
    yield put(setError(null));
  } catch (e: any) {
    yield put(setError(firebaseErrorHandler(e.code)));
  }
}
