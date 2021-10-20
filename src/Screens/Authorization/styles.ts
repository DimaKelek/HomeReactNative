import {StyleSheet, TextStyle, ViewStyle} from 'react-native';
import {Theme} from '../../Common/Themes/types';

type AuthScreenStylesType = {
  auth: ViewStyle;
  container: ViewStyle;
  button: ViewStyle;
  input: ViewStyle;
  inputContainer: ViewStyle;
  title: TextStyle;
  errorText: TextStyle;
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
    inputContainer: {
      height: 60,
      marginBottom: 10,
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
