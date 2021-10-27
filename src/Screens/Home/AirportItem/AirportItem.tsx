import React, {FC} from 'react';
import {Animated, Dimensions, Text, TouchableOpacity} from 'react-native';
import {useComponentStyles} from 'hooks/Hooks';
import {airportItemStyles} from 'homeScreen/AirportItem/AirportItem.styles';
import {AirportItemPropsType} from 'homeScreen/AirportItem/AirportItem.types';

const {height} = Dimensions.get('window');
const ratio = 228 / 362;
export const airHeight = 50 * ratio + 32;

export const AirportItem: FC<AirportItemPropsType> = props => {
  const {airport, onPressDetails, y, index} = props;
  const Style = useComponentStyles(airportItemStyles);
  const position = Animated.subtract(index * airHeight, y);
  const translateY = Animated.add(
    Animated.add(
      y,
      y.interpolate({
        inputRange: [0, index * airHeight],
        outputRange: [0, -index * airHeight],
        extrapolateRight: 'clamp',
      }),
    ),
    position.interpolate({
      inputRange: [height - 64 - airHeight, height - 64],
      outputRange: [0, -airHeight / 4],
      extrapolate: 'clamp',
    }),
  );
  const scale = position.interpolate({
    inputRange: [-airHeight, 0, height - 64 - airHeight, height - 64],
    outputRange: [0, 1, 1, 0.5],
    extrapolate: 'clamp',
  });

  return (
    <TouchableOpacity
      activeOpacity={0.5}
      onPress={() => onPressDetails(airport.name)}>
      <Animated.View
        style={[Style.container, {transform: [{translateY}, {scale}]}]}>
        <Text style={Style.name}>{airport.name}</Text>
        <Text style={Style.countryCode}>✈ {airport.countryCode}</Text>
      </Animated.View>
    </TouchableOpacity>
  );
};
