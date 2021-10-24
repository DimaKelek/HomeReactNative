import {Theme} from 'themes/types';
import {StyleSheet} from 'react-native';

export const stacksStyles = (theme: Theme) => {
  return StyleSheet.create({
    stackHeader: {
      backgroundColor: theme.color.background,
    },
    stackHeaderColor: {
      color: theme.color.font,
    },
  });
};
