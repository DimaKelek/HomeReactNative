import {call, put} from 'redux-saga/effects';
import {airportApi} from '../../Api/Api';
import {GetAirportsType} from 'sagas/Sagas.types';
import {setAirports} from 'redux/Airports/Airports.actions';

export function* getAirPortsSaga(action: ReturnType<GetAirportsType>) {
  try {
    // @ts-ignore
    const data = yield call(airportApi.getAirports, action.data);
    yield put(setAirports(data.items));
  } catch (e: any) {
    console.log(e.message);
  }
}
