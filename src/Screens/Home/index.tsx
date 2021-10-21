import React from 'react';
import {Screens} from '../../Navigation/enum';
import {HomeProps} from '../../Navigation/types';
import {HomeView} from './HomeView';
import {useDispatch} from 'react-redux';
import {logOutUser} from '../../Redux/Sagas/sagaActions';

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
