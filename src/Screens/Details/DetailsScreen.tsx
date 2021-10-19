import React, {FC} from 'react';
import {Text, View} from 'react-native';
import {detailsStyles} from './styles';
import {DetailsProps} from '../../Navigation/types';
import {useComponentStyles} from '../../Common/Hooks/Hooks';
import {useTranslation} from 'react-i18next';

export const DetailsScreen: FC<DetailsProps> = () => {
  const Styles = useComponentStyles(detailsStyles);
  const {t} = useTranslation();
  return (
    <View style={Styles.details}>
      <Text style={Styles.text}>{t('Details Screen')}</Text>
    </View>
  );
};
