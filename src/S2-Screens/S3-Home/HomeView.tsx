import React, {FC, useState} from 'react';
import {Text, View} from 'react-native';
import {HomeStyles} from './HomeView.styles';
import {Screens} from 'nav/enum';
import {useComponentStyles} from 'hooks/Hooks';
import {useTranslation} from 'react-i18next';
import {HomeViewPropsType} from './Home.types';
import {MyButton} from 'components/MyButton/MyButton';
import Slider from '@react-native-community/slider';

export const HomeView: FC<HomeViewPropsType> = props => {
  const {onPressDetails, onPressMap} = props;
  const Styles = useComponentStyles(HomeStyles);
  const {t} = useTranslation();
  const [value, setValue] = useState<number>(0);
  return (
    <View style={Styles.home}>
      <MyButton title={t(Screens.Details)} onPress={onPressDetails} />
      <MyButton
        title={t(Screens.Map)}
        onPress={onPressMap}
        style={Styles.mapButton}
      />

      <Slider
        style={Styles.slider}
        value={value}
        onValueChange={setValue}
        step={100}
        minimumValue={0}
        maximumValue={1000}
        minimumTrackTintColor={'#57bd8a'}
        maximumTrackTintColor={'#123'}
      />
      <Text>{value}</Text>
    </View>
  );
};
