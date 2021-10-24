import React, {FC, memo} from 'react';
import {Text, View} from 'react-native';
import {useTranslation} from 'react-i18next';
import {useComponentStyles} from 'hooks/Hooks';
import {authStyles} from './styles';
import {Formik} from 'formik';
import {AuthViewPropsType} from './types';
import {MyInput} from 'components/Input/MyInput';
import {MyButton} from 'components/MyButton/MyButton';

export const AuthView: FC<AuthViewPropsType> = memo(props => {
  const {validate, signInHandler, signUpHandler} = props;
  const Styles = useComponentStyles(authStyles);
  const {t} = useTranslation();
  return (
    <Formik
      initialValues={{email: 'kelek123@lolkek.com', password: '1234qwer'}}
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
            <MyButton
              style={Styles.button}
              onPress={handleSubmit}
              title={t('Sign In')}
            />
            <MyButton
              style={Styles.button}
              onPress={signUpHandler}
              title={t('Sign Up')}
            />
          </View>
        );
      }}
    </Formik>
  );
});
