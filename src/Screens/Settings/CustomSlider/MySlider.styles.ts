import {Theme} from '../../../Common/Themes/types';
import {StyleSheet, TextStyle, ViewStyle} from 'react-native';

type MySliderStylesType = {
  bubble: ViewStyle;
  container: ViewStyle;
  slider: ViewStyle;
  backgroundSlider: ViewStyle;
  bubbleWrapper: ViewStyle;
  text: TextStyle;
};

export const mySliderStyles = (theme: Theme, sliderHeight: number) => {
  return StyleSheet.create<MySliderStylesType>({
    bubble: {
      width: 20,
      height: 20,
      borderRadius: 10,
    },
    container: {
      width: 40,
      alignItems: 'center',
    },
    slider: {
      width: 20,
      alignItems: 'center',
      height: sliderHeight,
    },
    backgroundSlider: {
      width: 10,
      height: sliderHeight,
      borderRadius: 10,
    },
    bubbleWrapper: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: 20,
      height: 20,
    },
    text: {
      color: '#000',
    },
  });
};
