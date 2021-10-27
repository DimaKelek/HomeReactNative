import React from 'react';
import {Screens} from 'nav/enum';
import {HomeProps} from 'nav/types';
import {HomeView} from './HomeView';
import {useDispatch, useSelector} from 'react-redux';
import {selectAirports} from 'redux/Airports/Airports.selectors';
import {selectAirport} from 'redux/Airports/Airports.actions';

export const HomeScreen: React.FC<HomeProps> = ({navigation}) => {
  const airports = useSelector(selectAirports);
  const dispatch = useDispatch();
  const onPressDetails = (airName: string) => {
    dispatch(selectAirport(airName));
    navigation.navigate(Screens.Details);
  };

  return <HomeView onPressDetails={onPressDetails} airports={airports} />;
};
