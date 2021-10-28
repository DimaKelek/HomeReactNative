import React, {FC} from 'react';
import {View} from 'react-native';
import {PanGestureHandler} from 'react-native-gesture-handler';
import Animated from 'react-native-reanimated';
import {SliderViewPropsType} from './MySlider.types';

export const MySliderView: FC<SliderViewPropsType> = props => {
  const {Styles, penGestureEvent, rStyle} = props;

  return (
    <View style={Styles.container}>
      <View style={Styles.slider}>
        <View style={Styles.track} />
        <PanGestureHandler onGestureEvent={penGestureEvent}>
          <Animated.View style={[Styles.bubbleWrapper, rStyle]}>
            <View style={Styles.bubble} />
          </Animated.View>
        </PanGestureHandler>
      </View>
    </View>
  );
};
