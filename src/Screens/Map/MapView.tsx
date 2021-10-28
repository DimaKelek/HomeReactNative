import React, {FC, memo} from 'react';
import {View} from 'react-native';
import {HomeViewPropsType} from './Map.types';
import {MyMap} from './MyMap/MyMap';

export const MapsView: FC<HomeViewPropsType> = memo(({searchAirports}) => {
  return (
    <View>
      <MyMap searchAirports={searchAirports} />
    </View>
  );
});
