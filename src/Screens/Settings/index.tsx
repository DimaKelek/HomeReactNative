import React from 'react';
import {SettingsProps} from '../../Navigation/Navigation.types';
import {useDispatch, useSelector} from 'react-redux';
import {SettingsView} from './SettingsView';
import {Alert} from 'react-native';
import {
  ImageLibraryOptions,
  launchImageLibrary,
} from 'react-native-image-picker';
import {changeAvatar} from 'redux/Settings/actions';
import {selectAvatar} from 'redux/Settings/selectors';
import {selectUserData} from 'redux/Auth/selectors';
import {logOutUser} from 'sagas/sagaActions';

export const SettingsScreen: React.FC<SettingsProps> = () => {
  const avatar = useSelector(selectAvatar);
  const dispatch = useDispatch();
  const userData = useSelector(selectUserData);

  const exitHandler = () => {
    dispatch(logOutUser());
  };

  const changeAvatarHandler = () => {
    const options: ImageLibraryOptions = {
      mediaType: 'photo',
    };

    launchImageLibrary(options, response => {
      if (response.didCancel) {
        Alert.alert("You didn't select any image");
      } else {
        let source = {uri: response.uri};
        dispatch(changeAvatar(source.uri ?? ''));
      }
    });
  };

  return (
    <SettingsView
      changeAvatarHandler={changeAvatarHandler}
      avatar={avatar}
      userData={userData}
      exitHandler={exitHandler}
    />
  );
};
