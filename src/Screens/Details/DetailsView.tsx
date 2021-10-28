import React, {FC, memo} from 'react';
import {useComponentStyles} from 'hooks/Hooks';
import {detailsStyles} from './DetailsView.styles';
import {useTranslation} from 'react-i18next';
import {Text, View} from 'react-native';
import {DetailsViewPropsType} from './Details.types';
import {IataSvg} from 'Common/Icons/Svg/IataSvg';

export const DetailsView: FC<DetailsViewPropsType> = memo(({airport}) => {
  const Styles = useComponentStyles(detailsStyles);
  const {t} = useTranslation();

  return (
    <View style={Styles.details}>
      <View style={Styles.ticket}>
        <Text style={Styles.name}>{airport?.name}</Text>
        <Text style={Styles.plane}>✈</Text>
        <View style={Styles.locationContainer}>
          <Text style={Styles.location}>Location</Text>
          <Text style={Styles.location}>{airport?.location.lat}</Text>
          <Text style={Styles.location}>{airport?.location.lon}</Text>
          <IataSvg />
        </View>
      </View>
    </View>
  );
});
