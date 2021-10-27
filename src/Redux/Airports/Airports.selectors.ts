import {AppStateType} from 'redux/store';

export const selectAirports = (state: AppStateType) => state.air.airports;
export const selectAirName = (state: AppStateType) => state.air.selectedAirName;
