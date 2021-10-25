import {StyleSheet, ViewStyle} from 'react-native';
import {Theme} from 'themes/types';

type DetailsStylesType = {
  taskScreen: ViewStyle;
  tasks: ViewStyle;
};

export const detailsStyles = (theme: Theme) => {
  return StyleSheet.create<DetailsStylesType>({
    taskScreen: {
      flex: 1,
      justifyContent: 'flex-start',
      alignItems: 'center',
      paddingHorizontal: 10,
      paddingVertical: 25,
      backgroundColor: theme.color.background,
    },
    tasks: {
      width: '100%',
    },
  });
};
