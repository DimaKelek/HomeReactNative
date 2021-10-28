import {call, put} from 'redux-saga/effects';
import {logOutFireBase} from 'firebase/firebase';
import {setError, setUserData} from '../Auth/actions';

export function* logOutUserSaga() {
  try {
    yield call(logOutFireBase);
    yield put(setUserData(null));
    yield put(setError(null));
  } catch (e) {
    console.log('Error logOut');
  }
}
