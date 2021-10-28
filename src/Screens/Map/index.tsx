import React from 'react';
import {MapProps} from '../../Navigation/Navigation.types';
import {MapsView} from './MapView';
import {useDispatch} from 'react-redux';
import {getAirports} from 'sagas/sagaActions';

export const MapScreen: React.FC<MapProps> = ({navigation}) => {
  const dispatch = useDispatch();
  const searchAirports = (value: number) => {
    dispatch(
      getAirports({
        lon: 27.6004393,
        lat: 53.8967378,
        limit: 100,
        radius: Math.ceil(value / 1000),
      }),
    );
    navigation.navigate('Airports');
  };

  return <MapsView searchAirports={searchAirports} />;
};
