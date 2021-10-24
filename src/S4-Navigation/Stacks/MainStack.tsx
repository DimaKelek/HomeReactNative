import {useTranslation} from 'react-i18next';
import {Screens} from '../enum';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {StackNavigationType} from '../types';
import {HomeScreen} from 'homeScreen/index';
import {useComponentStyles} from 'hooks/Hooks';
import {stacksStyles} from './styles';
import {DetailsScreen} from 'detailsScreen/index';

export const MainStack = () => {
  const Stack = createNativeStackNavigator<StackNavigationType>();
  const Styles = useComponentStyles(stacksStyles);
  const {t} = useTranslation();
  return (
    <Stack.Navigator screenOptions={{headerTitleAlign: 'center'}}>
      <Stack.Screen
        name={Screens.Home}
        component={HomeScreen}
        options={{
          title: t(Screens.Home),
          headerStyle: Styles.stackHeader,
          headerTitleStyle: Styles.stackHeaderColor,
        }}
      />
      <Stack.Screen
        name={Screens.Details}
        component={DetailsScreen}
        options={{
          title: t(Screens.Details),
          headerStyle: Styles.stackHeader,
          headerTitleStyle: Styles.stackHeaderColor,
        }}
      />
    </Stack.Navigator>
  );
};
