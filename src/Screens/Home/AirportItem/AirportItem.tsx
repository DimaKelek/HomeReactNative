import React, {FC, memo} from 'react';
import {Animated, Dimensions, Text, TouchableOpacity} from 'react-native';
import {useComponentStyles} from 'hooks/Hooks';
import {AirportItemPropsType} from 'homeScreen/AirportItem/AirportItem.types';
import {airportItemStyles} from './AirportItem.styles';

const {height} = Dimensions.get('window');

export const AirportItem: FC<AirportItemPropsType> = memo(props => {
  const {airport, onPressDetails, scrollY, index} = props;
  const Style = useComponentStyles(airportItemStyles);

  const inputRange = [
    -1,
    0,
    (height * 0.1 + 15) * index,
    (height * 0.2 + 15) * (index + 3),
  ];
  const offset = scrollY.interpolate({
    inputRange,
    outputRange: [0, 0, 0, 1000],
  });

  return (
    <TouchableOpacity
      activeOpacity={0.5}
      onPress={() => onPressDetails(airport.name)}>
      <Animated.View
        style={[
          Style.container,
          {transform: [{scale: 1}, {translateX: offset}]},
        ]}>
        <Text style={Style.name}>{airport.name}</Text>
        <Text style={Style.countryCode}>✈ {airport.countryCode}</Text>
      </Animated.View>
    </TouchableOpacity>
  );
});
