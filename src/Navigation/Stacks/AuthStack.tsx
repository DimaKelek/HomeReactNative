import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {AuthStackType} from '../types';
import React from 'react';
import {Screens} from '../enum';
import {AuthScreen} from 'authScreen/index';
import {RegistrationScreen} from 'registerScreen/index';
import {useTranslation} from 'react-i18next';

export const AuthStack = () => {
  const Stack = createNativeStackNavigator<AuthStackType>();
  const {t} = useTranslation();
  return (
    <Stack.Navigator screenOptions={{headerTitleAlign: 'center'}}>
      <Stack.Screen
        name={Screens.Auth}
        component={AuthScreen}
        options={{title: t(Screens.Auth)}}
      />
      <Stack.Screen
        name={Screens.Register}
        component={RegistrationScreen}
        options={{title: t(Screens.Register)}}
      />
    </Stack.Navigator>
  );
};
