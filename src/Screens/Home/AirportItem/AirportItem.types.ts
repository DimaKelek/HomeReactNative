import {AirportsResponseType} from 'Api/types';
import {Animated} from 'react-native';

export type AirportItemPropsType = {
  y: Animated.Value;
  index: number;
  airport: AirportsResponseType;
  onPressDetails: (airName: string) => void;
};
