import React from 'react';
import {Screens} from 'nav/enum';
import {HomeProps} from 'nav/types';
import {HomeView} from './HomeView';

export const HomeScreen: React.FC<HomeProps> = ({navigation}) => {
  const onPressDetails = () => {
    navigation.navigate(Screens.Details);
  };

  const onPressMap = () => {
    navigation.navigate(Screens.Map);
  };

  return <HomeView onPressDetails={onPressDetails} onPressMap={onPressMap} />;
};
