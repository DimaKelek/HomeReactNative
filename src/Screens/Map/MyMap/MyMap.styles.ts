import {StyleSheet, TextStyle, ViewStyle} from 'react-native';
import {Theme} from 'themes/types';

type MapStylesType = {
  map: ViewStyle;
  slider: ViewStyle;
  range: TextStyle;
  search: ViewStyle;
  mapContainer: ViewStyle;
  sliderContainer: ViewStyle;
};

export const mapStyles = (theme: Theme) => {
  return StyleSheet.create<MapStylesType>({
    map: {
      height: '100%',
    },
    mapContainer: {
      height: '100%',
    },
    slider: {
      width: 350,
      margin: 10,
      transform: [{rotate: '-90deg'}],
    },
    range: {
      margin: 5,
      color: theme.color.font,
    },
    search: {
      width: 150,
      position: 'absolute',
      bottom: 10,
      right: 10,
    },
    sliderContainer: {
      width: 50,
      height: '100%',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'absolute',
      right: 0,
    },
  });
};
