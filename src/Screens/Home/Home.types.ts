import {AirportsResponseType} from 'Api/types';

export type HomeViewPropsType = {
  onPressDetails: (airName: string) => void;
  airports: AirportsResponseType[] | null;
};
