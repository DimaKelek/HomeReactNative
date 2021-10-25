import {StyleSheet, TextStyle, ViewStyle} from 'react-native';
import {Theme} from 'themes/types';

type DetailsStylesType = {
  details: ViewStyle;
  text: TextStyle;
};

export const detailsStyles = (theme: Theme) => {
  return StyleSheet.create<DetailsStylesType>({
    details: {},
    text: {
      color: theme.color.font,
    },
  });
};
