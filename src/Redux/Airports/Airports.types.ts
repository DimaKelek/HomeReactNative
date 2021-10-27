import {AirportsResponseType} from 'Api/types';
import {AirportsReducerActions} from 'redux/enum';

export type AirportStateType = {
  airports: AirportsResponseType[] | null;
  selectedAirName: string;
};

export type AirportsActions =
  | ReturnType<SetAitportsType>
  | ReturnType<SelectAirportType>;

export type SetAitportsType = (airports: AirportsResponseType[]) => {
  type: AirportsReducerActions.SetAir;
  airports: AirportsResponseType[];
};

export type SelectAirportType = (airName: string) => {
  type: AirportsReducerActions.SelectedAir;
  airName: string;
};
