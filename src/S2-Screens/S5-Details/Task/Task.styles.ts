import {StyleSheet, TextStyle, ViewStyle} from 'react-native';
import {Theme} from 'themes/types';

type TaskStylesType = {
  task: ViewStyle;
  container: ViewStyle;
  taskText: TextStyle;
};

export const taskStyles = (theme: Theme) => {
  return StyleSheet.create<TaskStylesType>({
    task: {
      width: '100%',
      height: 50,
      marginBottom: 10,
      paddingHorizontal: 15,
      justifyContent: 'center',
      backgroundColor: theme.color.todoBackground,
      borderRadius: 5,
    },
    container: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    taskText: {
      color: theme.color.font,
    },
  });
};
