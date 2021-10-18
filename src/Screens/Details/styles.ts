import {StyleSheet, TextStyle, ViewStyle} from 'react-native';
import {Theme} from '../../Common/Themes/types';

type DetailsStylesType = {
  details: ViewStyle;
  text: TextStyle;
};

export const detailsStyles = (theme: Theme) => {
  return StyleSheet.create<DetailsStylesType>({
    details: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: theme.color.background,
    },
    text: {
      color: theme.color.font,
    },
  });
};
