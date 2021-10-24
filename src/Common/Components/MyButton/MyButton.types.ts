import {ButtonProps, StyleProp, ViewStyle} from 'react-native';

export type MyButtonPropsType = ButtonProps & {
  style?: StyleProp<ViewStyle>;
};
