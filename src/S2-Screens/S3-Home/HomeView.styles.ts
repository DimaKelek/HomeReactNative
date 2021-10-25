import {StyleSheet, ViewStyle} from 'react-native';
import {Theme} from 'themes/types';

type HomeStylesType = {
  home: ViewStyle;
  slider: ViewStyle;
  mapButton: ViewStyle;
  todolists: ViewStyle;
  flatContainer: ViewStyle;
};

export const homeStyles = (theme: Theme) => {
  return StyleSheet.create<HomeStylesType>({
    home: {
      flex: 1,
      paddingTop: 60,
      paddingHorizontal: 15,
      alignItems: 'center',
      justifyContent: 'center',
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
    todolists: {
      width: '100%',
    },
    flatContainer: {
      width: '100%',
    },
  });
};
