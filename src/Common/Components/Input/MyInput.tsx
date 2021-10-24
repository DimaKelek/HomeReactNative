import React, {FC, memo} from 'react';
import {Text, TextInput, View} from 'react-native';
import {useComponentStyles} from 'hooks/Hooks';
import {MyInputPropsType} from './MyInput.types';
import {inputStyles} from './MyInput.styles';

export const MyInput: FC<MyInputPropsType> = memo(props => {
  const {style, touched, error, ...restProps} = props;
  const Styles = useComponentStyles(inputStyles);
  return (
    <View style={Styles.inputContainer}>
      <TextInput {...restProps} style={style} />
      {error && touched ? <Text style={Styles.errorText}>{error}</Text> : null}
    </View>
  );
});
