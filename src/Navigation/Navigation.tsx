import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {Image} from 'react-native';
import {StackNavigationType, TabNavigationType} from './types';
import {styles} from './styles';
import {HomeScreen} from '../Screens/Home/HomeScreen';
import {SettingsScreen} from '../Screens/Settings/SettingsScreen';
import {DetailsScreen} from '../Screens/Details/DetailsScreen';
import {Screens} from './enum';
import {useTranslation} from 'react-i18next';

const Tab = createBottomTabNavigator<TabNavigationType>();
const Stack = createNativeStackNavigator<StackNavigationType>();

const MainStack = () => {
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

export const AppNavigation = () => {
  const {t} = useTranslation();
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name={Screens.Main}
          component={MainStack}
          options={{
            tabBarIcon: () => (
              <Image source={require('../Common/Icons/home.png')} />
            ),
            tabBarLabelStyle: styles.label,
            tabBarStyle: styles.tabBar,
            headerShown: false,
            title: t(Screens.Home),
          }}
        />
        <Tab.Screen
          name={Screens.Settings}
          component={SettingsScreen}
          options={{
            tabBarIcon: () => (
              <Image source={require('../Common/Icons/settings.png')} />
            ),
            tabBarLabelStyle: styles.label,
            tabBarStyle: styles.tabBar,
            headerShown: false,
            title: t(Screens.Settings),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
