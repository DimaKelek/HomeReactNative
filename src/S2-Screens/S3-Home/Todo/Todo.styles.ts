import {Theme} from 'themes/types';
import {StyleSheet, TextStyle, ViewStyle} from 'react-native';

type TodoStylesType = {
  todoBlock: ViewStyle;
  icon: ViewStyle;
  title: TextStyle;
  button: ViewStyle;
  todoWrapper: ViewStyle;
};

export const todoStyles = (theme: Theme) => {
  return StyleSheet.create<TodoStylesType>({
    todoWrapper: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
    },
    todoBlock: {
      width: 240,
      height: 50,
      marginBottom: 10,
      paddingHorizontal: 15,
      justifyContent: 'center',
      backgroundColor: theme.color.todoBackground,
      borderRadius: 5,
    },
    title: {
      color: theme.color.font,
    },
    icon: {
      width: 30,
      height: 30,
      backgroundColor: '#e8ecec',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 10,
      marginRight: 15,
    },
    button: {
      color: '#000',
    },
  });
};
