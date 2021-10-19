import React from 'react';
import {SettingsProps} from '../../Navigation/types';
import {useDispatch} from 'react-redux';
import {changeIsLoggedIn} from '../../Redux/authReducer';
import {SettingsView} from './SettingsView';

export const SettingsScreen: React.FC<SettingsProps> = () => {
  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(changeIsLoggedIn(false));
  };

  return <SettingsView logoutHandler={logoutHandler} />;
};
