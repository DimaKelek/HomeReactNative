import React, {FC, memo} from 'react';
import {Dimensions} from 'react-native';
import {PanGestureHandlerGestureEvent} from 'react-native-gesture-handler';
import {
  runOnJS,
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';
import {mySliderStyles} from './MySlider.styles';
import {useTheme} from 'themes/ThemeContext';
import {customSliderConstants} from '../../Constants/Сonstants';
import {MySliderView} from './index';
import {SliderContextType, SliderPropsType} from './MySlider.types';

const {height: screenHeight} = Dimensions.get('window');

export const MySlider: FC<SliderPropsType> = memo(props => {
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
    <MySliderView
      Styles={Styles}
      rStyle={rStyle}
      penGestureEvent={penGestureEvent}
    />
  );
});
