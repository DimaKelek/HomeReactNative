import React, {FC} from 'react';
import MapView, {Marker} from 'react-native-maps';
import {useComponentStyles} from 'hooks/Hooks';
import {mapStyles} from './MyMap.styles';
import {View} from 'react-native';

export const MyMap: FC = () => {
  const Styles = useComponentStyles(mapStyles);
  return (
    <View style={Styles.map}>
      <MapView
        style={Styles.map}
        region={{
          latitude: 53.8953378,
          longitude: 27.6004393,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        showsUserLocation={true}>
        <Marker
          coordinate={{
            latitude: 53.8967378,
            longitude: 27.6004393,
          }}
          title={'BelItSoft'}
          description={'This is a description of the marker'}
        />
      </MapView>
    </View>
  );
};
