import React from 'react';
import {Button, Text, View} from 'react-native';
import {HomeStyles} from './styles';
import {Screens} from '../../Navigation/enum';
import {HomeProps} from '../../Navigation/types';
import {useComponentStyles} from '../../Common/Hooks/Hooks';
import {useTranslation} from 'react-i18next';

export const HomeScreen: React.FC<HomeProps> = ({navigation}) => {
  const Styles = useComponentStyles(HomeStyles);
  const {t} = useTranslation();

  const onPressHandler = () => {
    navigation.navigate(Screens.Details);
  };

  return (
    <View style={Styles.home}>
      <Text style={Styles.text}>{t('Home Screen')}</Text>
      <Button title={t(Screens.Details)} onPress={onPressHandler} />
    </View>
  );
};
