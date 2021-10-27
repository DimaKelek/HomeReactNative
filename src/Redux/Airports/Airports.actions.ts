import {
  SelectAirportType,
  SetAitportsType,
} from 'redux/Airports/Airports.types';
import {AirportsReducerActions} from 'redux/enum';

export const setAirports: SetAitportsType = airports => {
  return {type: AirportsReducerActions.SetAir, airports};
};

export const selectAirport: SelectAirportType = airName => {
  return {type: AirportsReducerActions.SelectedAir, airName};
};
