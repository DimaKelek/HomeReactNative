import {AirportsResponseType} from '../../../Api/Api.types';
import {Animated} from 'react-native';

export type AirportItemPropsType = {
  scrollY: Animated.Value;
  index: number;
  airport: AirportsResponseType;
  onPressDetails: (airName: string) => void;
};
