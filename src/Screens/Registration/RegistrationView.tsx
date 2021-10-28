import React, {FC, memo} from 'react';
import {useComponentStyles} from 'hooks/Hooks';
import {registrationStyles} from './RegistrationView.styles';
import {useTranslation} from 'react-i18next';
import {Button, Text, View} from 'react-native';
import {RegistrationViewPropsType} from './Register.types';
import {MyInput} from 'components/Input/MyInput';
import {Formik} from 'formik';

export const RegistrationView: FC<RegistrationViewPropsType> = memo(props => {
  const {validate, signUpHandler} = props;
  const Styles = useComponentStyles(registrationStyles);
  const {t} = useTranslation();

  const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  };
  return (
    <View style={Styles.registration}>
      <Formik
        initialValues={initialValues}
        onSubmit={signUpHandler}
        validate={validate}>
        {({handleChange, handleSubmit, errors, touched, values}) => {
          return (
            <View style={Styles.registration}>
              <Text style={Styles.title}>{t('Sign Up')}</Text>
              <View style={Styles.container}>
                <MyInput
                  value={values.firstName}
                  placeholder={t('First name')}
                  placeholderTextColor={Styles.placeholder.color}
                  onChangeText={handleChange('firstName')}
                  error={errors.firstName}
                  touched={touched.firstName}
                  style={[
                    Styles.input,
                    errors.firstName && touched.firstName
                      ? Styles.inputError
                      : Styles.inputNormal,
                  ]}
                />
                <MyInput
                  value={values.lastName}
                  placeholder={t('Last name')}
                  placeholderTextColor={Styles.placeholder.color}
                  onChangeText={handleChange('lastName')}
                  touched={touched.lastName}
                  error={errors.lastName}
                  style={[
                    Styles.input,
                    errors.lastName && touched.lastName
                      ? Styles.inputError
                      : Styles.inputNormal,
                  ]}
                />
                <MyInput
                  value={values.email}
                  placeholder={t('Email')}
                  placeholderTextColor={Styles.placeholder.color}
                  onChangeText={handleChange('email')}
                  touched={touched.email}
                  error={errors.email}
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
                  style={[
                    Styles.input,
                    errors.password && touched.password
                      ? Styles.inputError
                      : Styles.inputNormal,
                  ]}
                />
                <MyInput
                  value={values.confirmPassword}
                  placeholder={t('Confirm password')}
                  placeholderTextColor={Styles.placeholder.color}
                  onChangeText={handleChange('confirmPassword')}
                  touched={touched.confirmPassword}
                  error={errors.confirmPassword}
                  style={[
                    Styles.input,
                    errors.confirmPassword && touched.confirmPassword
                      ? Styles.inputError
                      : Styles.inputNormal,
                  ]}
                />
                <View />
                <View style={Styles.button}>
                  <Button title={t('Sign Up')} onPress={handleSubmit} />
                </View>
              </View>
            </View>
          );
        }}
      </Formik>
    </View>
  );
});
