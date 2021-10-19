import {useTranslation} from 'react-i18next';
import {Screens} from '../enum';
import {HomeScreen} from '../../Screens/Home/HomeScreen';
import {DetailsScreen} from '../../Screens/Details/DetailsScreen';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {StackNavigationType} from '../types';

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
