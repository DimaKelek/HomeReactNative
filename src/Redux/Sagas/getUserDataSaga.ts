import {GetUserDataSagaAction} from './Sagas.types';
import {UserType} from '../Auth/types';
import {call, put} from 'redux-saga/effects';
import {getFirebaseUserData} from 'Firebase/firebase';
import {setUserData} from '../Auth/actions';

export function* getUserDataSaga(action: ReturnType<GetUserDataSagaAction>) {
  try {
    const userData: UserType = yield call(getFirebaseUserData, action.userID);
    yield put(setUserData(userData));
  } catch (e) {
    console.log(e);
  }
}
