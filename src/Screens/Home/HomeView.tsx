import React, {FC, memo} from 'react';
import {Animated, Text, View} from 'react-native';
import {homeStyles} from './HomeView.styles';
import {useComponentStyles} from 'hooks/Hooks';
import {useTranslation} from 'react-i18next';
import {
  HomeViewPropsType,
  KeyExtractorType,
  RenderItemType,
} from './Home.types';
import {AirportItem} from 'homeScreen/AirportItem/AirportItem';

export const HomeView: FC<HomeViewPropsType> = memo(props => {
  const {onPressDetails, airports, onScroll, scrollY} = props;
  const Styles = useComponentStyles(homeStyles);
  const {t} = useTranslation();

  const keyExtractor: KeyExtractorType = item => item.name;
  const renderItem: RenderItemType = info => {
    const {index, item} = info;
    return (
      <AirportItem
        airport={item}
        onPressDetails={onPressDetails}
        scrollY={scrollY}
        index={index}
      />
    );
  };

  return (
    <View style={Styles.home}>
      {!airports || airports?.length === 0 ? (
        <Text>No information about airports</Text>
      ) : (
        <Animated.FlatList
          scrollEventThrottle={16}
          style={Styles.flatList}
          data={airports}
          keyExtractor={keyExtractor}
          renderItem={renderItem}
          {...{onScroll}}
        />
      )}
    </View>
  );
});
