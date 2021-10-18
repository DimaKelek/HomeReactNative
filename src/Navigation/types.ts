import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {Screens} from './enum';
import {BottomTabScreenProps} from '@react-navigation/bottom-tabs';

export type TabNavigationType = {
  Main: any;
  Settings: any;
};

export type StackNavigationType = {
  Home: any;
  Details: any;
};

export type HomeProps = NativeStackScreenProps<
  StackNavigationType,
  Screens.Home
>;
export type DetailsProps = NativeStackScreenProps<
  StackNavigationType,
  Screens.Details
>;
export type SettingsProps = BottomTabScreenProps<
  TabNavigationType,
  Screens.Settings
>;

export type MainProps = BottomTabScreenProps<TabNavigationType, Screens.Main>;
