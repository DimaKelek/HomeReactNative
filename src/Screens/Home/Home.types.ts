import {AirportsResponseType} from '../../Api/Api.types';
import {Animated, FlatListProps, ListRenderItem} from 'react-native';

export type HomeViewPropsType = {
  onPressDetails: (airName: string) => void;
  airports: AirportsResponseType[] | null;
  onScroll: (...args: any[]) => void;
  scrollY: Animated.Value;
};

export type KeyExtractorType =
  FlatListProps<AirportsResponseType>['keyExtractor'];
export type RenderItemType = ListRenderItem<AirportsResponseType>;
