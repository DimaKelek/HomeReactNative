import React, {FC, useMemo} from 'react';
import {Text, View} from 'react-native';
import {detailsStyles} from './styles';
import {useTheme} from '../../Common/Themes/ThemeContext';
import {DetailsProps} from '../../Navigation/types';

export const DetailsScreen: FC<DetailsProps> = () => {
  const {theme} = useTheme();
  const Styles = useMemo(() => detailsStyles(theme), [theme]);

  return (
    <View style={Styles.details}>
      <Text style={Styles.text}>Details Screen</Text>
    </View>
  );
};
