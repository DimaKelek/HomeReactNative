import {Screens} from '../enum';
import {MainStack} from '../Stacks/MainStack';
import {navigationsStyles} from '../styles';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {TabNavigationType} from '../types';
import {useTranslation} from 'react-i18next';
import {SettingsScreen} from 'settingsScreen/index';
import {useComponentStyles} from 'hooks/Hooks';
import {HomeSvg} from 'Common/Icons/Svg/HomeSvg';
import {SettingsSvg} from 'Common/Icons/Svg/SettingsSvg';

export const MainTab = () => {
  const Tab = createBottomTabNavigator<TabNavigationType>();
  const Styles = useComponentStyles(navigationsStyles);
  const {t} = useTranslation();
  return (
    <Tab.Navigator>
      <Tab.Screen
        name={Screens.Main}
        component={MainStack}
        options={{
          tabBarIcon: () => <HomeSvg />,
          tabBarLabelStyle: Styles.label,
          tabBarStyle: Styles.tabBar,
          headerShown: false,
          title: t(Screens.Home),
        }}
      />
      <Tab.Screen
        name={Screens.Settings}
        component={SettingsScreen}
        options={{
          tabBarIcon: () => <SettingsSvg />,
          tabBarLabelStyle: Styles.label,
          tabBarStyle: Styles.tabBar,
          headerShown: false,
          title: t(Screens.Settings),
        }}
      />
    </Tab.Navigator>
  );
};
