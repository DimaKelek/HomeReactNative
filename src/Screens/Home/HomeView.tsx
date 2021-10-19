import React, {FC} from 'react';
import {Button, Text, View} from 'react-native';
import {HomeStyles} from './styles';
import {Screens} from '../../Navigation/enum';
import {useComponentStyles} from '../../Common/Hooks/Hooks';
import {useTranslation} from 'react-i18next';
import {HomeViewPropsType} from './types';

export const HomeView: FC<HomeViewPropsType> = ({onPressHandler}) => {
  const Styles = useComponentStyles(HomeStyles);
  const {t} = useTranslation();

  return (
    <View style={Styles.home}>
      <Text style={Styles.text}>{t('Home Screen')}</Text>
      <Button title={t(Screens.Details)} onPress={onPressHandler} />
    </View>
  );
};
