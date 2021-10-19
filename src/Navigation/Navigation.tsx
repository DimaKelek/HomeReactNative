import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {useSelector} from 'react-redux';
import {selectIsLoggedIn} from '../Redux/selectors';
import {AuthStack} from './Stacks/AuthStack';
import {MainTab} from './Tabs/MainTab';

export const AppNavigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <NavigationContainer>
      {isLoggedIn ? <MainTab /> : <AuthStack />}
    </NavigationContainer>
  );
};
