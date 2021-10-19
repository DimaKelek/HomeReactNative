import React from 'react';
import {SettingsProps} from '../../Navigation/types';
import {useDispatch} from 'react-redux';
import {SettingsView} from './SettingsView';
import {Alert} from 'react-native';
import {changeIsLoggedIn} from '../../Redux/Auth/actions';
import {
  ImageLibraryOptions,
  launchImageLibrary,
} from 'react-native-image-picker';
import {changeAvatar} from '../../Redux/Settings/actions';

export const SettingsScreen: React.FC<SettingsProps> = () => {
  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(changeIsLoggedIn(false));
  };

  const changeAvatarHandler = () => {
    const options: ImageLibraryOptions = {
      mediaType: 'photo',
    };

    launchImageLibrary(options, response => {
      console.log({response});
      if (response.didCancel) {
        console.log('User cancelled photo picker');
        Alert.alert('You did not select any image');
      } else if (response.errorCode) {
        console.log('ImagePicker Error: ', response.errorCode);
      } else {
        let source = {uri: response.uri};
        console.log({source});
        dispatch(changeAvatar(source.uri ?? ''));
      }
    });
  };

  return (
    <SettingsView
      logoutHandler={logoutHandler}
      changeAvatarHandler={changeAvatarHandler}
    />
  );
};
