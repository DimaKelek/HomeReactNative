import {StyleSheet, TextStyle, ViewStyle} from 'react-native';
import {Theme} from '../../../Common/Themes/types';

type InputStylesType = {
  input: ViewStyle;
  inputContainer: ViewStyle;
  errorText: TextStyle;
};

export const inputStyles = (theme: Theme) => {
  return StyleSheet.create<InputStylesType>({
    inputContainer: {
      height: 50,
      marginBottom: 5,
    },
    input: {
      width: '100%',
      height: 40,
      paddingHorizontal: 15,
      backgroundColor: theme.color.input,
      color: theme.color.font,
      borderStyle: 'solid',
      borderColor: '#78adea',
      borderWidth: 2,
      borderRadius: 5,
    },
    errorText: {
      color: '#d9264b',
      marginHorizontal: 10,
    },
  });
};
