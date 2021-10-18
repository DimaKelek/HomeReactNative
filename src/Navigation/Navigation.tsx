import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import React from "react";
import {Image} from "react-native";
import {StackNavigationType, TabNavigationType} from "./types";
import {styles} from "./styles";
import {HomeScreen} from "../Screens/Home/HomeScreen";
import {SettingsScreen} from "../Screens/Settings/SettingsScreen";
import {DetailsScreen} from "../Screens/Details/DetailsScreen";
import {Screens} from "./enum";

const Tab = createBottomTabNavigator<TabNavigationType>();
const Stack = createNativeStackNavigator<StackNavigationType>();

const MainStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name={Screens.Home} component={HomeScreen}/>
            <Stack.Screen name={Screens.Details} component={DetailsScreen}/>
        </Stack.Navigator>
    );
}

export const AppNavigation = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen
                    name={Screens.Main}
                    component={MainStack}
                    options={{
                        tabBarIcon: () => <Image source={require("../Common/Icons/home.png")}/>,
                        tabBarLabelStyle: styles.label,
                        tabBarStyle: styles.tabBar,
                        headerShown: false,
                        title: Screens.Home
                    }}
                />
                <Tab.Screen
                    name={Screens.Settings}
                    component={SettingsScreen}
                    options={{
                        tabBarIcon: () => <Image source={require("../Common/Icons/settings.png")}/>,
                        tabBarLabelStyle: styles.label,
                        tabBarStyle: styles.tabBar,
                        headerShown: false
                    }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    );
}