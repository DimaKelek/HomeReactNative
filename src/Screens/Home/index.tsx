import React from 'react';
import {Screens} from 'nav/enum';
import {HomeProps} from '../../Navigation/Navigation.types';
import {HomeView} from './HomeView';
import {useDispatch, useSelector} from 'react-redux';
import {selectAirports} from 'redux/Airports/Airports.selectors';
import {selectAirport} from 'redux/Airports/Airports.actions';
import {Animated} from 'react-native';

export const HomeScreen: React.FC<HomeProps> = ({navigation}) => {
  const airports = useSelector(selectAirports);
  const dispatch = useDispatch();

  const onPressDetails = (airName: string) => {
    dispatch(selectAirport(airName));
    navigation.navigate(Screens.Details);
  };

  const scrollY = React.useRef(new Animated.Value(0)).current;
  const onScroll = Animated.event(
    [
      {
        nativeEvent: {
          contentOffset: {y: scrollY},
        },
      },
    ],
    {useNativeDriver: true},
  );
  return (
    <HomeView
      onPressDetails={onPressDetails}
      airports={airports}
      onScroll={onScroll}
      scrollY={scrollY}
    />
  );
};
