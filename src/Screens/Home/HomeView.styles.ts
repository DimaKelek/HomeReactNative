import {StyleSheet, ViewStyle} from 'react-native';
import {Theme} from '../../Common/Themes/Theme.types';

type HomeStylesType = {
  home: ViewStyle;
  mapButton: ViewStyle;
  flatList: ViewStyle;
};

export const homeStyles = (theme: Theme) => {
  return StyleSheet.create<HomeStylesType>({
    home: {
      flex: 1,
      paddingTop: 10,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: theme.color.background,
    },
    mapButton: {
      position: 'absolute',
      right: 10,
      top: 10,
    },
    flatList: {
      width: '100%',
    },
  });
};
