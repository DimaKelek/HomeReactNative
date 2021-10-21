import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {AuthStackType} from '../types';
import React from 'react';
import {Screens} from '../enum';
import {AuthScreen} from '../../Screens/Authorization';
import {RegistrationScreen} from '../../Screens/Registration';

export const AuthStack = () => {
  const Stack = createNativeStackNavigator<AuthStackType>();
  return (
    <Stack.Navigator screenOptions={{headerTitleAlign: 'center'}}>
      <Stack.Screen name={Screens.Auth} component={AuthScreen} />
      <Stack.Screen name={Screens.Register} component={RegistrationScreen} />
    </Stack.Navigator>
  );
};
