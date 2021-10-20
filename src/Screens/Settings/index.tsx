import React from 'react';
import {SettingsProps} from '../../Navigation/types';
import {useDispatch, useSelector} from 'react-redux';
import {SettingsView} from './SettingsView';
import {Alert} from 'react-native';
import {
  ImageLibraryOptions,
  launchImageLibrary,
} from 'react-native-image-picker';
import {changeAvatar} from '../../Redux/Settings/actions';
import {selectAvatar} from '../../Redux/Settings/selectors';
import {logOutUser} from '../../Redux/Sagas/actions';

export const SettingsScreen: React.FC<SettingsProps> = () => {
  const avatar = useSelector(selectAvatar);
  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(logOutUser());
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
      avatar={avatar}
    />
  );
};
