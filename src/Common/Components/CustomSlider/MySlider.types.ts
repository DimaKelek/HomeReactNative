import {MySliderStylesType} from './MySlider.styles';
import {
  GestureEvent,
  PanGestureHandlerEventPayload,
} from 'react-native-gesture-handler';

export type SliderContextType = {
  translateY: number;
};

export type SliderPropsType = {
  sliderHeight?: number;
  onChange: (value: number) => void;
  maxValue: number;
  trackColor?: string;
  bubbleColor?: string;
};

export type SliderViewPropsType = {
  Styles: MySliderStylesType;
  rStyle: {transform: {translateY: number}[]};
  penGestureEvent: (event: GestureEvent<PanGestureHandlerEventPayload>) => void;
};
