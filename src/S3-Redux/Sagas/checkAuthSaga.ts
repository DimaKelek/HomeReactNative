import {call, put} from 'redux-saga/effects';
import {checkAuthFirebase} from 'S1-Firebase/firebase';
import {setError} from '../Auth/actions';
import {firebaseErrorHandler} from 'utils/errorHandler';
import {getUserData} from './sagaActions';

export function* checkAuthSaga() {
  try {
    const userID: string = yield call(checkAuthFirebase);
    yield put(getUserData(userID));
  } catch (e: any) {
    yield put(setError(firebaseErrorHandler(e.code)));
  }
}
