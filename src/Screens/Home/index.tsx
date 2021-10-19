import React from 'react';
import {Screens} from '../../Navigation/enum';
import {HomeProps} from '../../Navigation/types';
import {HomeView} from './HomeView';

export const HomeScreen: React.FC<HomeProps> = ({navigation}) => {
  const onPressHandler = () => {
    navigation.navigate(Screens.Details);
  };

  return <HomeView onPressHandler={onPressHandler} />;
};
