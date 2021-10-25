import {NavigationContainer} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {AuthStack} from './Stacks/AuthStack';
import {MainTab} from './Tabs/MainTab';
import {selectUserData} from 'redux/Auth/selectors';
import {checkAuth} from 'sagas/sagaActions';

export const AppNavigation = () => {
  const userData = useSelector(selectUserData);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkAuth());
  }, [dispatch]);

  return (
    <NavigationContainer>
      {userData ? <MainTab /> : <AuthStack />}
    </NavigationContainer>
  );
};
