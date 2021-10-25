import React from 'react';
import {MapProps} from 'nav/types';
import {MapsView} from './MapView';

export const MapScreen: React.FC<MapProps> = ({navigation}) => {
  return <MapsView />;
};
