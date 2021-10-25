import React, {FC} from 'react';
import {useComponentStyles} from 'hooks/Hooks';
import {detailsStyles} from './DetailsView.styles';
import {useTranslation} from 'react-i18next';
import {Text, View} from 'react-native';
import {DetailsViewPropsType} from './Details.types';

export const DetailsView: FC<DetailsViewPropsType> = () => {
  const Styles = useComponentStyles(detailsStyles);
  const {t} = useTranslation();
  return (
    <View style={Styles.details}>
      <Text style={Styles.text}>{t('Details Screen')}</Text>
    </View>
  );
};
