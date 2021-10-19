import React, {FC} from 'react';
import {Button, Text, TextInput, View} from 'react-native';
import {useTranslation} from 'react-i18next';
import {useComponentStyles} from '../../Common/Hooks/Hooks';
import {authStyles} from './styles';
import {Formik} from 'formik';
import {AuthViewPropsType} from './types';

export const AuthView: FC<AuthViewPropsType> = ({validate, signInHandler}) => {
  const Styles = useComponentStyles(authStyles);
  const {t} = useTranslation();

  return (
    <Formik
      initialValues={{firstName: '', lastName: '', email: ''}}
      onSubmit={values => console.log(values)}
      validate={validate}>
      {({handleChange, handleSubmit, errors, touched}) => {
        return (
          <View style={Styles.auth}>
            <Text style={Styles.title}>Sign In</Text>
            <View style={Styles.container}>
              <View>
                <TextInput
                  style={Styles.input}
                  placeholder={t('First name')}
                  placeholderTextColor={Styles.title.color}
                  onChangeText={handleChange('firstName')}
                />
                {errors.firstName && touched.firstName ? (
                  <Text>{errors.firstName}</Text>
                ) : null}
              </View>
              <View>
                <TextInput
                  style={Styles.input}
                  placeholder={t('Last name')}
                  placeholderTextColor={Styles.title.color}
                  onChangeText={handleChange('lastName')}
                />
                {errors.lastName && touched.lastName ? (
                  <Text>{errors.lastName}</Text>
                ) : null}
              </View>
              <View>
                <TextInput
                  style={Styles.input}
                  placeholder={t('Email')}
                  placeholderTextColor={Styles.title.color}
                  onChangeText={handleChange('email')}
                />
                {errors.email && touched.email ? (
                  <Text>{errors.email}</Text>
                ) : null}
              </View>
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
