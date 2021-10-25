import {StyleSheet, TextStyle, ViewStyle} from 'react-native';
import {Theme} from 'themes/types';

type AuthScreenStylesType = {
  auth: ViewStyle;
  container: ViewStyle;
  button: ViewStyle;
  input: ViewStyle;
  title: TextStyle;
  inputError: ViewStyle;
  inputNormal: ViewStyle;
  placeholder: TextStyle;
};

export const authStyles = (theme: Theme) => {
  return StyleSheet.create<AuthScreenStylesType>({
    auth: {
      flex: 1,
      padding: 15,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: theme.color.background,
    },
    title: {
      fontSize: 28,
      fontWeight: 'bold',
      marginBottom: 30,
      color: theme.color.font,
    },
    container: {
      width: '100%',
    },
    button: {
      width: 200,
      marginTop: 25,
    },
    input: {
      width: '100%',
      height: 40,
      paddingHorizontal: 15,
      backgroundColor: theme.color.input,
      color: theme.color.font,
      borderStyle: 'solid',
      borderWidth: 2,
      borderRadius: 5,
    },
    inputError: {
      borderColor: '#dc5878',
    },
    inputNormal: {
      borderColor: '#78adea',
    },
    placeholder: {
      color: theme.color.placeholderColor,
    },
  });
};
