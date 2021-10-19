import React, {FC} from 'react';
import {Text, View} from 'react-native';
import {detailsStyles} from './styles';
import {DetailsProps} from '../../Navigation/types';
import {useComponentStyles} from '../../Common/Hooks/Hooks';

export const DetailsScreen: FC<DetailsProps> = () => {
  const Styles = useComponentStyles(detailsStyles);

  return (
    <View style={Styles.details}>
      <Text style={Styles.text}>Details Screen</Text>
    </View>
  );
};
