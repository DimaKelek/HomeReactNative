import React, {FC, useState} from 'react';
import MapView, {Circle, Marker} from 'react-native-maps';
import {useComponentStyles} from 'hooks/Hooks';
import {mapStyles} from './MyMap.styles';
import {View} from 'react-native';
import Slider from '@react-native-community/slider';
import {MyButton} from 'components/MyButton/MyButton';
import {MyMapType} from './MyMap.types';
import {MySlider} from '../../../Common/Components/CustomSlider/MySlider';

export const MyMap: FC<MyMapType> = ({searchAirports}) => {
  const Styles = useComponentStyles(mapStyles);
  const [value, setValue] = useState<number>(0);
  return (
    <View style={Styles.mapContainer}>
      <MapView
        style={Styles.map}
        region={{
          latitude: 53.8953378,
          longitude: 27.6004393,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}>
        <Marker
          coordinate={{
            latitude: 53.8967378,
            longitude: 27.6004393,
          }}
          title={'BelItSoft'}
          description={'This is a description of the marker'}
        />
        <Circle
          center={{latitude: 53.8967378, longitude: 27.6004393}}
          radius={value}
          strokeColor={'#de2f5a'}
          strokeWidth={3}
        />
      </MapView>
      <View style={Styles.sliderContainer}>
        <MySlider onChange={setValue} maxValue={1000000} sliderHeight={250} />
      </View>
      <MyButton
        style={Styles.search}
        title={`Search ${Math.ceil(value / 1000) + ' Km'}`}
        onPress={() => searchAirports(value)}
      />
    </View>
  );
};
