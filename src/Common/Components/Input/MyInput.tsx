import React, {FC, memo} from 'react';
import {Text, TextInput, View} from 'react-native';
import {useComponentStyles} from '../../Hooks/Hooks';
import {inputStyles} from './styles';

export const MyInput: FC<any> = memo(props => {
  const {style, touched, error, ...restProps} = props;
  const Styles = useComponentStyles(inputStyles);
  return (
    <View style={Styles.inputContainer}>
      <TextInput {...restProps} style={style} />
      {error && touched ? <Text style={Styles.errorText}>{error}</Text> : null}
    </View>
  );
});
