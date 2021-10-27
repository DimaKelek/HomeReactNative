import React, {FC, useRef, useState} from 'react';
import {Dimensions, StyleSheet, Text, View} from 'react-native';
import {PanGestureHandler, State} from 'react-native-gesture-handler';
import Animated, {
  call,
  concat,
  cond,
  diffClamp,
  divide,
  eq,
  multiply,
  round,
  sub,
  useCode,
  Value,
} from 'react-native-reanimated';
import {onGestureEvent, ReText, withOffset} from 'react-native-redash';
import {mySliderStyles} from './MySlider.styles';
import {useTheme} from '../../../Common/Themes/ThemeContext';

const {height} = Dimensions.get('window');
const sliderHeight = height - 250;

type SliderPropsType = {
  maxValue: number;
  trackColor: string;
  bubbleColor: string;
};

export const MySlider: FC<SliderPropsType> = props => {
  const {maxValue, trackColor, bubbleColor} = props;
  const {theme} = useTheme();
  const Styles = mySliderStyles(theme, sliderHeight);
  const [range, setRange] = useState(0);
  const rangeRef = useRef(0);
  const refV = new Value(0);

  const state = new Value(State.UNDETERMINED);
  const translationY = new Value(0);
  const gestureHandler = onGestureEvent({state, translationY});
  const value = withOffset(translationY, state);
  const y = diffClamp(value, rangeRef.current, sliderHeight);
  const translateY = sub(y, 20 / 2);

  const result = round(multiply(divide(y, sliderHeight), maxValue));
  const label = concat(result);

  useCode(
    () =>
      cond(
        eq(state, State.END),
        call([result], ([v]) => {
          // setRange(v);
          //@ts-ignore
          refV.setValue(v);
          console.log(result);
        }),
      ),
    [state, result],
  );

  return (
    <View style={Styles.container}>
      <View style={Styles.slider}>
        <View
          style={[Styles.backgroundSlider, {backgroundColor: trackColor}]}
        />
        <PanGestureHandler minDist={0} {...gestureHandler}>
          <Animated.View
            style={[Styles.bubbleWrapper, {transform: [{translateY}]}]}>
            <View style={[Styles.bubble, {backgroundColor: bubbleColor}]} />
          </Animated.View>
        </PanGestureHandler>
      </View>
      {/*<ReText text={label} style={Styles.text} />*/}
      <Text>{refV[' __value']}</Text>
    </View>
  );
};
