import {StyleSheet, TextStyle, ViewStyle} from 'react-native';
import {Theme} from '../../Themes/types';

type InputStylesType = {
  inputContainer: ViewStyle;
  errorText: TextStyle;
};

export const inputStyles = (theme: Theme) => {
  return StyleSheet.create<InputStylesType>({
    inputContainer: {
      height: 60,
      marginBottom: 5,
    },
    errorText: {
      color: '#d9264b',
      marginHorizontal: 10,
    },
  });
};
