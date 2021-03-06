import {StyleSheet} from 'react-native';
import {Theme} from '../Common/Themes/Theme.types';

export const navigationsStyles = (theme: Theme) => {
  return StyleSheet.create({
    label: {
      fontSize: 18,
    },
    tabBar: {
      paddingBottom: 10,
      height: 80,
      backgroundColor: theme.color.background,
    },
  });
};
