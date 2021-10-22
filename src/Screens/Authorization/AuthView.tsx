import React, {FC, memo} from 'react';
import {Button, Text, View} from 'react-native';
import {useTranslation} from 'react-i18next';
import {useComponentStyles} from '../../Common/Hooks/Hooks';
import {authStyles} from './styles';
import {Formik} from 'formik';
import {AuthViewPropsType} from './types';
import {MyInput} from '../../Common/Components/Input/MyInput';

export const AuthView: FC<AuthViewPropsType> = memo(props => {
  const {validate, signInHandler, signUpHandler} = props;
  const Styles = useComponentStyles(authStyles);
  const {t} = useTranslation();
  return (
    <Formik
      initialValues={{email: '', password: ''}}
      onSubmit={signInHandler}
      validate={validate}>
      {({handleChange, handleSubmit, errors, touched, values}) => {
        return (
          <View style={Styles.auth}>
            <Text style={Styles.title}>{t('Sign In')}</Text>
            <View style={Styles.container}>
              <MyInput
                value={values.email}
                placeholder={t('Email')}
                placeholderTextColor={Styles.placeholder.color}
                onChangeText={handleChange('email')}
                error={errors.email}
                touched={touched.email}
                style={[
                  Styles.input,
                  errors.email && touched.email
                    ? Styles.inputError
                    : Styles.inputNormal,
                ]}
              />
              <MyInput
                value={values.password}
                placeholder={t('Password')}
                placeholderTextColor={Styles.placeholder.color}
                onChangeText={handleChange('password')}
                touched={touched.password}
                error={errors.password}
                secureTextEntry={true}
                style={[
                  Styles.input,
                  errors.password && touched.password
                    ? Styles.inputError
                    : Styles.inputNormal,
                ]}
              />
            </View>
            <View style={Styles.button}>
              <Button onPress={handleSubmit} title={t('Sign In')} />
            </View>
            <View style={Styles.button}>
              <Button onPress={signUpHandler} title={t('Sign Up')} />
            </View>
          </View>
        );
      }}
    </Formik>
  );
});
