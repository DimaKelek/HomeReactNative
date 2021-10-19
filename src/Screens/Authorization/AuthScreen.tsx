import React, {FC} from 'react';
import {Button, Text, TextInput, View} from 'react-native';
import {useTranslation} from 'react-i18next';
import {useComponentStyles} from '../../Common/Hooks/Hooks';
import {authStyles} from './styles';

export const AuthScreen: FC = () => {
  const Styles = useComponentStyles(authStyles);
  const {t} = useTranslation();
  return (
    <View style={Styles.auth}>
      <Text style={Styles.title}>Sign In</Text>
      <View style={Styles.container}>
        <TextInput
          style={Styles.input}
          placeholder={t('First name')}
          placeholderTextColor={'#262626'}
        />
        <TextInput
          style={Styles.input}
          placeholder={t('Last name')}
          placeholderTextColor={'#262626'}
        />
        <TextInput
          style={Styles.input}
          placeholder={t('Email')}
          placeholderTextColor={'#262626'}
        />
      </View>
      <View style={Styles.button}>
        <Button title={t('Login')} />
      </View>
    </View>
  );
};
