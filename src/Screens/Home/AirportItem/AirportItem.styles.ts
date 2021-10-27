import {Theme} from 'themes/types';
import {StyleSheet, TextStyle, ViewStyle} from 'react-native';

type AirportItemStylesType = {
  container: ViewStyle;
  countryCode: TextStyle;
  name: TextStyle;
};

export const airportItemStyles = (theme: Theme) => {
  return StyleSheet.create<AirportItemStylesType>({
    container: {
      height: 50,
      width: '93%',
      marginLeft: 13,
      position: 'relative',
      borderRadius: 10,
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 15,
      padding: 10,
      backgroundColor: theme.color.todoBackground,
    },
    countryCode: {
      position: 'absolute',
      right: 8,
      top: 5,
      color: '#14e88d',
    },
    name: {
      color: theme.color.font,
    },
  });
};
