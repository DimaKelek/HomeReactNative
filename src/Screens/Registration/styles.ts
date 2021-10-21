import {StyleSheet, TextStyle, ViewStyle} from 'react-native';
import {Theme} from '../../Common/Themes/types';

type RegistrationStylesType = {
  registration: ViewStyle;
  text: TextStyle;
  title: TextStyle;
  container: ViewStyle;
  button: ViewStyle;
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
  });
};
