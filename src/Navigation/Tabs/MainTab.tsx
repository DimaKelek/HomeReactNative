import {Screens} from '../enum';
import {MainStack} from '../Stacks/MainStack';
import {Image} from 'react-native';
import {styles} from '../styles';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {TabNavigationType} from '../types';
import {useTranslation} from 'react-i18next';
import {SettingsScreen} from '../../Screens/Settings';

export const MainTab = () => {
  const Tab = createBottomTabNavigator<TabNavigationType>();
  const {t} = useTranslation();
  return (
    <Tab.Navigator>
      <Tab.Screen
        name={Screens.Main}
        component={MainStack}
        options={{
          tabBarIcon: () => (
            <Image source={require('../../Common/Icons/home.png')} />
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
            <Image source={require('../../Common/Icons/settings.png')} />
          ),
          tabBarLabelStyle: styles.label,
          tabBarStyle: styles.tabBar,
          headerShown: false,
          title: t(Screens.Settings),
        }}
      />
    </Tab.Navigator>
  );
};
