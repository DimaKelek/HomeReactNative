import {StyleSheet} from 'react-native';
import {Theme} from '../Common/Themes/types';

export const navigationsStyles = (theme: Theme) => {
  return StyleSheet.create({
    label: {
      fontSize: 18,
    },
    tabBar: {
      padding: 10,
      height: 60,
      // borderRadius: 10,
      backgroundColor: theme.color.background,
    },
  });
};
