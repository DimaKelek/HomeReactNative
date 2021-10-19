import {NativeModules, Platform} from 'react-native';

export const langDetector = () => {
  return (
    Platform.OS === 'android' && NativeModules.I18nManager.localeIdentifier
  );
};
