import React, {FC} from 'react';
import {Dimensions, View} from 'react-native';
import {
  PanGestureHandler,
  PanGestureHandlerGestureEvent,
} from 'react-native-gesture-handler';
import Animated, {
  runOnJS,
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';
import {mySliderStyles} from './MySlider.styles';
import {useTheme} from 'themes/ThemeContext';
import {customSliderConstants} from '../../Constants/Сonstants';

const {height: screenHeight} = Dimensions.get('window');

type SliderContextType = {
  translateY: number;
};

type SliderPropsType = {
  sliderHeight?: number;
  onChange: (value: number) => void;
  maxValue: number;
  trackColor?: string;
  bubbleColor?: string;
};

export const MySlider: FC<SliderPropsType> = props => {
  const {sliderHeight, maxValue, onChange, bubbleColor, trackColor} = props;
  const {correctionValue} = customSliderConstants.functional;
  const height = sliderHeight ?? screenHeight - 250;

  const {theme} = useTheme();
  const Styles = mySliderStyles({
    theme,
    sliderHeight: height,
    trackColor,
    bubbleColor,
  });

  const translateY = useSharedValue(0);
  const penGestureEvent = useAnimatedGestureHandler<
    PanGestureHandlerGestureEvent,
    SliderContextType
  >({
    onStart: (event, context) => {
      context.translateY = translateY.value;
    },
    onActive: (event, context) => {
      if (translateY.value >= 0 && translateY.value <= height) {
        translateY.value = event.translationY + context.translateY;
      }
      if (translateY.value <= 0) {
        translateY.value = correctionValue;
      }
      if (translateY.value >= height) {
        translateY.value = height - correctionValue;
      }
      runOnJS(onChange)(Math.round((translateY.value / height) * maxValue));
    },
    onEnd: () => {
      if (translateY.value <= 0) {
        translateY.value = correctionValue;
        runOnJS(onChange)(0);
      }
      if (translateY.value >= height) {
        translateY.value = height;
        runOnJS(onChange)(maxValue);
      }
    },
  });

  const rStyle = useAnimatedStyle(() => {
    return {
      transform: [{translateY: translateY.value}],
    };
  });

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
