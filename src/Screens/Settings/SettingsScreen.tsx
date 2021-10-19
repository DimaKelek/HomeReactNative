import React from 'react';
import {Button, Image, Text, View} from 'react-native';
import {ThemeBar} from '../../Common/Themes/ThemeBar/ThemeBar';
import {SettingsStyles} from './styles';
import {SettingsProps} from '../../Navigation/types';
import {useComponentStyles} from '../../Common/Hooks/Hooks';

export const SettingsScreen: React.FC<SettingsProps> = () => {
  const Styles = useComponentStyles(SettingsStyles);

  return (
    <View style={Styles.settings}>
      <View style={Styles.profileContainer}>
        <View style={[Styles.imageContainer, Styles.center]}>
          <Image
            source={require('../../Common/Images/logo.png')}
            style={Styles.image}
          />
        </View>
        <View style={[Styles.discriptionContainer, Styles.center]}>
          <View style={Styles.discription}>
            <Text style={Styles.discriptionText}>
              First name: {'Some Name'}
            </Text>
            <Text style={Styles.discriptionText}>Last name: {'Some Name'}</Text>
            <Text style={Styles.discriptionText}>
              Email: {'blablabla@gmail.com'}
            </Text>
          </View>
        </View>
      </View>
      <ThemeBar />
      <View style={Styles.button}>
        <Button title={'Exit'} />
      </View>
    </View>
  );
};
