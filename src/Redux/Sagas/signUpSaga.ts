import {SignUpFirebaseSagaAction} from './types';
import {call, put} from 'redux-saga/effects';
import {signUpFirebase} from '../../S1-Firebase/firebase';
import {setError} from '../Auth/actions';
import {firebaseErrorHandler} from '../../Common/Utils/errorHandler';

export function* signUpSaga(action: ReturnType<SignUpFirebaseSagaAction>) {
  try {
    yield call(signUpFirebase, action.values);
  } catch (e: any) {
    yield put(setError(firebaseErrorHandler(e.code)));
  }
}
