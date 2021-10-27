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
  Airports: any;
};

export type AuthStackType = {
  Authentication: any;
  Register: any;
};

export type HomeProps = NativeStackScreenProps<
  StackNavigationType,
  Screens.Home
>;
export type MapProps = NativeStackScreenProps<
  StackNavigationType,
  Screens.Airports
>;
export type DetailsProps = NativeStackScreenProps<
  StackNavigationType,
  Screens.Details
>;
export type SettingsProps = BottomTabScreenProps<
  TabNavigationType,
  Screens.Settings
>;

export type AuthProps = BottomTabScreenProps<AuthStackType, Screens.Auth>;
export type RegistrationProps = BottomTabScreenProps<
  AuthStackType,
  Screens.Register
>;
