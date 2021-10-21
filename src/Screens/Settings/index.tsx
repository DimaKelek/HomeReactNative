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
import {selectUserData} from '../../Redux/Auth/selectors';

export const SettingsScreen: React.FC<SettingsProps> = () => {
  const avatar = useSelector(selectAvatar);
  const dispatch = useDispatch();
  const userData = useSelector(selectUserData);

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
      changeAvatarHandler={changeAvatarHandler}
      avatar={avatar}
      userData={userData}
    />
  );
};
