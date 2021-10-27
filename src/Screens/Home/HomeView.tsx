import React, {FC} from 'react';
import {Animated, FlatList, Text, View} from 'react-native';
import {homeStyles} from './HomeView.styles';
import {useComponentStyles} from 'hooks/Hooks';
import {useTranslation} from 'react-i18next';
import {HomeViewPropsType} from './Home.types';
import {AirportItem} from 'homeScreen/AirportItem/AirportItem';

const AnimatedFlatlist = Animated.createAnimatedComponent(FlatList);

export const HomeView: FC<HomeViewPropsType> = props => {
  const {onPressDetails, airports} = props;
  const Styles = useComponentStyles(homeStyles);
  const {t} = useTranslation();

  const y = new Animated.Value(0);
  const onScroll = Animated.event(
    [
      {
        nativeEvent: {
          contentOffset: {y},
        },
      },
    ],
    {useNativeDriver: true},
  );
  return (
    <View style={Styles.home}>
      {!airports || airports.length === 0 ? (
        <Text>No information about airports</Text>
      ) : (
        <AnimatedFlatlist
          scrollEventThrottle={16}
          style={Styles.flatlist}
          data={airports}
          //@ts-ignore
          keyExtractor={item => item.name}
          renderItem={({index, item}) => (
            <AirportItem
              //@ts-ignore
              airport={item}
              onPressDetails={onPressDetails}
              y={y}
              index={index}
            />
          )}
          {...{onScroll}}
        />
      )}
    </View>
  );
};
