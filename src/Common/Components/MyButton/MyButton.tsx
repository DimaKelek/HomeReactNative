import React, {FC, memo} from 'react';
import {Button, View} from 'react-native';
import {MyButtonPropsType} from './MyButton.types';

export const MyButton: FC<MyButtonPropsType> = memo(({style, ...restProps}) => {
  return (
    <View style={style}>
      <Button {...restProps} />
    </View>
  );
});
