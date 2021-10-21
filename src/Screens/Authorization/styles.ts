import {StyleSheet, TextStyle, ViewStyle} from 'react-native';
import {Theme} from '../../Common/Themes/types';

type AuthScreenStylesType = {
  auth: ViewStyle;
  container: ViewStyle;
  button: ViewStyle;
  title: TextStyle;
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
    }
  });
};
