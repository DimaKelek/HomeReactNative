import {AirportsReducerActions} from 'redux/enum';
import {AirportsActions, AirportStateType} from './Airports.types';

const initialState: AirportStateType = {
  airports: null,
  selectedAirName: '',
};

export const airportReducer = (
  state = initialState,
  action: AirportsActions,
): AirportStateType => {
  switch (action.type) {
    case AirportsReducerActions.SetAir: {
      return {...state, airports: action.airports};
    }
    case AirportsReducerActions.SelectedAir: {
      return {...state, selectedAirName: action.airName};
    }
    default:
      return state;
  }
};
