import React, {FC} from 'react';
import {Button, View} from 'react-native';
import {MyButtonPropsType} from './MyButton.types';

export const MyButton: FC<MyButtonPropsType> = ({style, ...restProps}) => {
  return (
    <View style={style}>
      <Button {...restProps} />
    </View>
  );
};
