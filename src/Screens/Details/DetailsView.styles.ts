import {StyleSheet, TextStyle, ViewStyle} from 'react-native';
import {Theme} from 'themes/Theme.types';

type DetailsStylesType = {
  details: ViewStyle;
  ticket: ViewStyle;
  locationContainer: ViewStyle;
  name: TextStyle;
  plane: TextStyle;
  location: TextStyle;
};

export const detailsStyles = (theme: Theme) => {
  return StyleSheet.create<DetailsStylesType>({
    details: {
      flex: 1,
      justifyContent: 'flex-start',
      alignItems: 'center',
      paddingHorizontal: 10,
      paddingVertical: 25,
      backgroundColor: theme.color.background,
    },
    ticket: {
      height: '80%',
      width: '100%',
      borderRadius: 10,
      padding: 10,
      backgroundColor: '#3592ef',
    },
    name: {
      fontSize: 30,
      color: '#fff',
    },
    plane: {
      position: 'absolute',
      bottom: -10,
      right: 0,
      fontSize: 120,
      color: '#fff',
    },
    location: {
      color: '#fff',
      fontSize: 30,
    },
    locationContainer: {
      position: 'absolute',
      left: 10,
      bottom: 10,
    },
  });
};
