import React, {FC} from 'react';
import {Text, TextInput, View} from 'react-native';
import {useComponentStyles} from '../../../Common/Hooks/Hooks';
import {inputStyles} from './styles';

export const MyInput: FC<any> = ({styles, touched, errors, ...restProps}) => {
  const Styles = useComponentStyles(inputStyles);
  return (
    <View style={Styles.inputContainer}>
      <TextInput
        {...restProps}
        style={Styles.input}
      />
    {errors.email && touched.email ? (
      <Text>{errors.email}</Text>
    ) : null}
  </View>
  );
}