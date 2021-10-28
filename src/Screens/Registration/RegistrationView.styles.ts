import {StyleSheet, TextStyle, ViewStyle} from 'react-native';
import {Theme} from 'themes/Theme.types';

type RegistrationStylesType = {
  registration: ViewStyle;
  text: TextStyle;
  title: TextStyle;
  container: ViewStyle;
  button: ViewStyle;
  input: ViewStyle;
  inputError: ViewStyle;
  inputNormal: ViewStyle;
  placeholder: TextStyle;
};

export const registrationStyles = (theme: Theme) => {
  return StyleSheet.create<RegistrationStylesType>({
    registration: {
      flex: 1,
      padding: 15,
      width: '100%',
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
    text: {
      color: theme.color.font,
    },
    button: {
      marginTop: 20,
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
