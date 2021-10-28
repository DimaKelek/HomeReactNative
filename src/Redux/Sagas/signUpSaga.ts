import {SignUpFirebaseSagaAction} from './Sagas.types';
import {call, put} from 'redux-saga/effects';
import {signUpFirebase} from 'firebase/firebase';
import {setError} from '../Auth/actions';
import {firebaseErrorHandler} from 'utils/errorHandler';

export function* signUpSaga(action: ReturnType<SignUpFirebaseSagaAction>) {
  try {
    yield call(signUpFirebase, action.values);
  } catch (e: any) {
    yield put(setError(firebaseErrorHandler(e.code)));
  }
}
