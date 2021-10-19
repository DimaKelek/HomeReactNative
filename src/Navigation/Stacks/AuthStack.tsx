import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {AuthStackType} from '../types';
import {AuthScreen} from '../../Screens/Authorization/AuthScreen';
import React from 'react';
import {Screens} from '../enum';

export const AuthStack = () => {
  const Stack = createNativeStackNavigator<AuthStackType>();
  return (
    <Stack.Navigator screenOptions={{headerTitleAlign: 'center'}}>
      <Stack.Screen name={Screens.Auth} component={AuthScreen} />
    </Stack.Navigator>
  );
};
