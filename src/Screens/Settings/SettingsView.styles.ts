import {ImageStyle, StyleSheet, TextStyle, ViewStyle} from 'react-native';
import {Theme} from 'themes/Theme.types';

type SettingsStylesType = {
  settings: ViewStyle;
  profileContainer: ViewStyle;
  imageContainer: ViewStyle;
  image: ImageStyle;
  discriptionContainer: ViewStyle;
  discription: ViewStyle;
  discriptionText: TextStyle;
  themeBar: ViewStyle;
  center: ViewStyle;
  exit: ViewStyle;
};

export const SettingsStyles = (theme: Theme) => {
  return StyleSheet.create<SettingsStylesType>({
    settings: {
      flex: 1,
      padding: 15,
      alignItems: 'center',
      backgroundColor: theme.color.background,
    },
    profileContainer: {
      height: 150,
      flexDirection: 'row',
    },
    imageContainer: {
      width: '30%',
    },
    image: {
      width: 110,
      height: 110,
      borderRadius: 55,
    },
    discriptionContainer: {
      width: '70%',
    },
    discription: {
      width: '90%',
      height: '90%',
      paddingHorizontal: 10,
      paddingVertical: 18,
      justifyContent: 'space-between',
    },
    discriptionText: {
      fontSize: 16,
      color: theme.color.font,
    },
    themeBar: {
      width: '100%',
      height: 50,
      padding: 10,
      borderRadius: 10,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: '#2997dc',
    },
    center: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    exit: {
      position: 'absolute',
      width: 150,
      bottom: 20,
    },
  });
};
