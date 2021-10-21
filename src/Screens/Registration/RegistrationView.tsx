import React, {FC} from 'react';
import {useComponentStyles} from '../../Common/Hooks/Hooks';
import {registrationStyles} from './styles';
import {useTranslation} from 'react-i18next';
import {Button, Text, View} from 'react-native';
import {RegistrationViewPropsType} from './types';
import {MyInput} from '../Authorization/Input/MyInput';
import {Formik} from 'formik';
import {useDispatch} from 'react-redux';
import {signUpFirebase} from '../../Redux/Sagas/sagaActions';

export type SignUpFormType = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
};

export const RegistrationView: FC<RegistrationViewPropsType> = props => {
  const {validate} = props;
  const Styles = useComponentStyles(registrationStyles);
  const {t} = useTranslation();
  const dispatch = useDispatch();

  const disabledButton = (values: SignUpFormType) => {
    if (values.password !== values.confirmPassword) {
      return true;
    } else {
      return Object.values(values).some(v => v === '');
    }
  };

  return (
    <View style={Styles.registration}>
      <Formik
        initialValues={{
          firstName: 'Name',
          lastName: 'Last Name',
          email: '',
          password: '1234qwer',
          confirmPassword: '1234qwer',
        }}
        onSubmit={values => {
          dispatch(signUpFirebase(values));
          console.log(values);
        }}
        validate={validate}>
        {({handleChange, handleSubmit, errors, touched, values}) => {
          return (
            <View style={Styles.registration}>
              <Text style={Styles.title}>Sign Up</Text>
              <View style={Styles.container}>
                <MyInput
                  value={values.firstName}
                  placeholder={t('First name')}
                  placeholderTextColor={Styles.title.color}
                  onChangeText={handleChange('firstName')}
                  errors={errors}
                  touched={touched}
                />
                <MyInput
                  value={values.lastName}
                  placeholder={t('Last name')}
                  placeholderTextColor={Styles.title.color}
                  onChangeText={handleChange('lastName')}
                  touched={touched}
                  errors={errors}
                />
                <MyInput
                  value={values.email}
                  placeholder={t('Email')}
                  placeholderTextColor={Styles.title.color}
                  onChangeText={handleChange('email')}
                  touched={touched}
                  errors={errors}
                />
                <MyInput
                  value={values.password}
                  placeholder={t('Password')}
                  placeholderTextColor={Styles.title.color}
                  onChangeText={handleChange('password')}
                  touched={touched}
                  errors={errors}
                />
                <MyInput
                  value={values.confirmPassword}
                  placeholder={t('Confirm password')}
                  placeholderTextColor={Styles.title.color}
                  onChangeText={handleChange('confirmPassword')}
                  touched={touched}
                  errors={errors}
                />
                <View />
                <View style={Styles.button}>
                  <Button
                    title={'Sign Up'}
                    disabled={disabledButton(values)}
                    onPress={handleSubmit}
                  />
                </View>
              </View>
            </View>
          );
        }}
      </Formik>
    </View>
  );
};
