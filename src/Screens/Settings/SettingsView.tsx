import React, {FC, useState} from 'react';
import {Text, TouchableHighlight, View} from 'react-native';
import {ThemeBar} from 'themes/ThemeBar/ThemeBar';
import {SettingsStyles} from './SettingsView.styles';
import {useComponentStyles} from 'hooks/Hooks';
import {useTranslation} from 'react-i18next';
import {SettingsViewType} from './Settings.types';
import {DefaultAvatar} from 'Common/Icons/Svg/DefaultAvatar';
import {MyButton} from 'components/MyButton/MyButton';
import Slider from '@react-native-community/slider';
import {MySlider} from 'settingsScreen/CustomSlider/MySlider';

export const SettingsView: FC<SettingsViewType> = props => {
  const {changeAvatarHandler, avatar, userData, exitHandler} = props;
  const Styles = useComponentStyles(SettingsStyles);
  const {t} = useTranslation();

  return (
    <View style={Styles.settings}>
      <View style={Styles.profileContainer}>
        <View style={[Styles.imageContainer, Styles.center]}>
          <TouchableHighlight
            onPress={changeAvatarHandler}
            style={Styles.image}>
            {avatar ?? <DefaultAvatar />}
          </TouchableHighlight>
        </View>
        <View style={[Styles.discriptionContainer, Styles.center]}>
          <View style={Styles.discription}>
            <Text style={Styles.discriptionText}>
              {t('First name')}: {userData?.firstName ?? 'Anonimus'}
            </Text>
            <Text style={Styles.discriptionText}>
              {t('Last name')}: {userData?.lastName ?? 'Anonimus'}
            </Text>
            <Text style={Styles.discriptionText}>
              {t('Email')}: {userData?.email ?? 'blablabla@gmail.com'}
            </Text>
          </View>
        </View>
      </View>
      <ThemeBar />
      <MySlider />
      <MyButton title={t('Exit')} onPress={exitHandler} style={Styles.exit} />
    </View>
  );
};
