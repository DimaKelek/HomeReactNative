import React, {FC} from 'react';
import {Button, Text, View} from 'react-native';
import {useTranslation} from 'react-i18next';
import {useComponentStyles} from '../../Common/Hooks/Hooks';
import {authStyles} from './styles';
import {Formik} from 'formik';
import {AuthViewPropsType} from './types';
import {MyInput} from './Input/MyInput';

export const AuthView: FC<AuthViewPropsType> = ({validate, signInHandler}) => {
  const Styles = useComponentStyles(authStyles);
  const {t} = useTranslation();

  return (
    <Formik
      initialValues={{email: 'kelek123@lolkek.com', password: '123qwer'}}
      onSubmit={values => console.log(values)}
      validate={validate}>
      {({handleChange, handleSubmit, errors, touched, values}) => {
        return (
          <View style={Styles.auth}>
            <Text style={Styles.title}>Sign In</Text>
            <View style={Styles.container}>
              <MyInput
                value={values.email}
                placeholder={t('Email')}
                placeholderTextColor={Styles.title.color}
                onChangeText={handleChange('email')}
                errors={errors}
                touched={touched}
              />
              <MyInput
                value={values.password}
                placeholder={t('Password')}
                placeholderTextColor={Styles.title.color}
                onChangeText={handleChange('password')}
                touched={touched}
                errors={errors}
              />
            </View>
            <View style={Styles.button}>
              <Button
                onPress={() => signInHandler(handleSubmit)}
                title={t('Login')}
              />
            </View>
          </View>
        );
      }}
    </Formik>
  );
};
