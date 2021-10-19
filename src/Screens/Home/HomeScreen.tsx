import React from 'react';
import {Button, Text, View} from 'react-native';
import {HomeStyles} from './styles';
import {Screens} from '../../Navigation/enum';
import {HomeProps} from '../../Navigation/types';
import {useComponentStyles} from '../../Common/Hooks/Hooks';

export const HomeScreen: React.FC<HomeProps> = ({navigation}) => {
  const Styles = useComponentStyles(HomeStyles);

  const onPressHandler = () => {
    navigation.navigate(Screens.Details);
  };

  return (
    <View style={Styles.home}>
      <Text style={Styles.text}>Home Screen</Text>
      <Button title={Screens.Details} onPress={onPressHandler} />
    </View>
  );
};
