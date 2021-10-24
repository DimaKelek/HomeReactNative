import {TextInputProps} from 'react-native';

export type MyInputPropsType = TextInputProps & {
  touched?: boolean;
  error?: string;
};
