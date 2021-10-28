import {Theme} from '../../../Common/Themes/Theme.types';
import {Dimensions, StyleSheet, TextStyle, ViewStyle} from 'react-native';

type AirportItemStylesType = {
  container: ViewStyle;
  countryCode: TextStyle;
  name: TextStyle;
};

const {height} = Dimensions.get('window');

export const airportItemStyles = (theme: Theme) => {
  return StyleSheet.create<AirportItemStylesType>({
    container: {
      height: height * 0.1,
      width: '93%',
      marginLeft: 13,
      position: 'relative',
      borderRadius: 10,
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 15,
      padding: 10,
      backgroundColor: theme.color.todoBackground,
      opacity: 0.9,
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
