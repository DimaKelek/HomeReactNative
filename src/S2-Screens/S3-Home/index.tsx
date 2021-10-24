import React from 'react';
import {Screens} from 'nav/enum';
import {HomeProps} from 'nav/types';
import {HomeView} from './HomeView';
import {useDispatch} from 'react-redux';
import {logOutUser} from 'sagas/sagaActions';

export const HomeScreen: React.FC<HomeProps> = ({navigation}) => {
  const dispatch = useDispatch();
  const onPressHandler = () => {
    navigation.navigate(Screens.Details);
  };

  const exitHandler = () => {
    dispatch(logOutUser());
  };

  return <HomeView onPressHandler={onPressHandler} exitHandler={exitHandler} />;
};
