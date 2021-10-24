import React, {FC} from 'react';
import {Button, Text, View} from 'react-native';
import {HomeStyles} from './styles';
import {Screens} from 'nav/enum';
import {useComponentStyles} from 'hooks/Hooks';
import {useTranslation} from 'react-i18next';
import {HomeViewPropsType} from './types';

export const HomeView: FC<HomeViewPropsType> = props => {
  const {onPressHandler, exitHandler} = props;
  const Styles = useComponentStyles(HomeStyles);
  const {t} = useTranslation();

  return (
    <View style={Styles.home}>
      <Text style={Styles.text}>{t('S3-Home Screen')}</Text>
      <Button title={t(Screens.Details)} onPress={onPressHandler} />
      <View style={Styles.exit}>
        <Button title={t('Exit')} onPress={exitHandler} />
      </View>
    </View>
  );
};
