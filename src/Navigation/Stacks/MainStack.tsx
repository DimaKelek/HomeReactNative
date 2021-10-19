import {useTranslation} from 'react-i18next';
import {Screens} from '../enum';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {StackNavigationType} from '../types';
import {HomeScreen} from '../../Screens/Home';
import {DetailsScreen} from '../../Screens/Details';

export const MainStack = () => {
  const Stack = createNativeStackNavigator<StackNavigationType>();
  const {t} = useTranslation();
  return (
    <Stack.Navigator screenOptions={{headerTitleAlign: 'center'}}>
      <Stack.Screen
        name={Screens.Home}
        component={HomeScreen}
        options={{title: t(Screens.Home)}}
      />
      <Stack.Screen
        name={Screens.Details}
        component={DetailsScreen}
        options={{title: t(Screens.Details)}}
      />
    </Stack.Navigator>
  );
};
