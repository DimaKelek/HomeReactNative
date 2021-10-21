import React, {FC} from 'react';
import {Button, Text, TouchableHighlight, View} from 'react-native';
import {ThemeBar} from '../../Common/Themes/ThemeBar/ThemeBar';
import {SettingsStyles} from './styles';
import {useComponentStyles} from '../../Common/Hooks/Hooks';
import {useTranslation} from 'react-i18next';
import {SettingsViewType} from './types';
import {DefaultAvatar} from '../../Common/Icons/Svg/DefaultAvatar';

export const SettingsView: FC<SettingsViewType> = props => {
  const {logoutHandler, changeAvatarHandler, avatar} = props;
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
              {t('First name')}: {'name'}
            </Text>
            <Text style={Styles.discriptionText}>
              {t('Last name')}: {'Kelek'}
            </Text>
            <Text style={Styles.discriptionText}>
              {t('Email')}: {'blablabla@gmail.com'}
            </Text>
          </View>
        </View>
      </View>
      <ThemeBar />
      <View style={Styles.button}>
        <Button title={t('Exit')} onPress={logoutHandler} />
      </View>
    </View>
  );
};
