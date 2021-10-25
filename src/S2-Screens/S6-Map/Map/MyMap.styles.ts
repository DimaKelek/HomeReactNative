import {StyleSheet, ViewStyle} from 'react-native';
import {Theme} from 'themes/types';

type MapStylesType = {
  map: ViewStyle;
};

export const mapStyles = (theme: Theme) => {
  return StyleSheet.create<MapStylesType>({
    map: {
      height: '100%',
    },
  });
};
