import React, {FC} from 'react';
import {View} from 'react-native';
import {HomeViewPropsType} from './Map.types';
import {MyMap} from './Map/MyMap';

export const MapsView: FC<HomeViewPropsType> = props => {
  return (
    <View>
      <MyMap />
    </View>
  );
};
