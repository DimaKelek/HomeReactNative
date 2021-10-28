import {Theme} from '../../Themes/Theme.types';
import {StyleSheet, TextStyle, ViewStyle} from 'react-native';
import {customSliderConstants} from '../../Constants/Сonstants';

export type MySliderStylesType = {
  bubble: ViewStyle;
  container: ViewStyle;
  slider: ViewStyle;
  track: ViewStyle;
  bubbleWrapper: ViewStyle;
  text: TextStyle;
};

type SliderDataType = {
  theme: Theme;
  sliderHeight: number;
  bubbleColor?: string;
  trackColor?: string;
};

export const mySliderStyles = (data: SliderDataType) => {
  const {bubbleSize} = customSliderConstants.styles;
  return StyleSheet.create<MySliderStylesType>({
    bubbleWrapper: {
      position: 'absolute',
      top: -bubbleSize / 2,
      left: 0,
      width: bubbleSize,
      height: bubbleSize,
    },
    bubble: {
      width: bubbleSize,
      height: bubbleSize,
      borderRadius: bubbleSize / 2,
      backgroundColor: data.bubbleColor ?? '#123456',
    },
    container: {
      width: 40,
      alignItems: 'center',
    },
    slider: {
      width: bubbleSize,
      alignItems: 'center',
      height: data.sliderHeight,
    },
    track: {
      width: bubbleSize / 2,
      height: data.sliderHeight,
      borderRadius: bubbleSize / 2,
      backgroundColor: data.trackColor ?? '#5ebf9d',
    },
    text: {
      color: '#000',
    },
  });
};
