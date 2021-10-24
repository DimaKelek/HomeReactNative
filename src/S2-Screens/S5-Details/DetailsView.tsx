import React, {FC} from 'react';
import {useComponentStyles} from 'hooks/Hooks';
import {detailsStyles} from './styles';
import {useTranslation} from 'react-i18next';
import {View} from 'react-native';
import {DetailsViewPropsType} from './types';
import MapView, {Marker} from 'react-native-maps';

export const DetailsView: FC<DetailsViewPropsType> = () => {
  const Styles = useComponentStyles(detailsStyles);
  const {t} = useTranslation();
  return (
    <View style={Styles.details}>
      {/*<Text style={Styles.text}>{t('S5-Details Screen')}</Text>*/}
      <MapView
        style={Styles.map}
        region={{
          latitude: 53.8953378,
          longitude: 27.6004393,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        showsUserLocation={true}>
        <Marker
          coordinate={{
            latitude: 53.8967378,
            longitude: 27.6004393,
          }}
          title={'Test Marker'}
          description={'This is a description of the marker'}
        />
      </MapView>
    </View>
  );
};
