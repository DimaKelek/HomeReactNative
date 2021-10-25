import {StyleSheet, TextStyle, ViewStyle} from 'react-native';
import {Theme} from 'themes/types';

type HomeStylesType = {
  home: ViewStyle;
  slider: ViewStyle;
  mapButton: ViewStyle;
};

export const HomeStyles = (theme: Theme) => {
  return StyleSheet.create<HomeStylesType>({
    home: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: theme.color.background,
    },
    slider: {
      width: 350,
    },
    mapButton: {
      position: 'absolute',
      right: 10,
      top: 10,
    },
  });
};
