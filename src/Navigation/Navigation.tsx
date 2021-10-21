import {NavigationContainer} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {AuthStack} from './Stacks/AuthStack';
import {MainTab} from './Tabs/MainTab';
import {selectUserData} from '../Redux/Auth/selectors';
import auth from '@react-native-firebase/auth';
import {getUserData} from '../Redux/Sagas/sagaActions';

export const AppNavigation = () => {
  const userData = useSelector(selectUserData);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsub = auth().onAuthStateChanged(user => {
      if (user) {
        dispatch(getUserData(user.uid));
      } else {
        console.log('User not logged in');
      }
    });
    return unsub;
  }, [dispatch]);

  return (
    <NavigationContainer>
      {userData ? <MainTab /> : <AuthStack />}
    </NavigationContainer>
  );
};
