import {StyleSheet, TextStyle, ViewStyle} from 'react-native';
import {Theme} from '../../Common/Themes/types';

type HomeStylesType = {
  home: ViewStyle;
  exit: ViewStyle;
  text: TextStyle;
};

export const HomeStyles = (theme: Theme) => {
  return StyleSheet.create<HomeStylesType>({
    home: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: theme.color.background,
    },
    text: {
      color: theme.color.font,
      fontSize: 24,
      marginBottom: 25,
    },
    exit: {
      marginVertical: 30,
    },
  });
};
