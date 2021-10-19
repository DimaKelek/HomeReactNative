import React, {FC} from 'react';
import {Button, Text, TextInput, View} from 'react-native';
import {useTranslation} from 'react-i18next';
import {useComponentStyles} from '../../Common/Hooks/Hooks';
import {authStyles} from './styles';
import {Formik} from 'formik';
import {useDispatch} from 'react-redux';
import {changeIsLoggedIn} from '../../Redux/authReducer';

type FormErrorsType = {
  firstName?: string;
  lastName?: string;
  email?: string;
};

export const AuthScreen: FC = () => {
  const Styles = useComponentStyles(authStyles);
  const dispatch = useDispatch();
  const {t} = useTranslation();

  const validate = (values: any) => {
    const errors: FormErrorsType = {};
    if (!values.firstName) {
      errors.firstName = 'First Name is required!!';
    }
    return errors;
  };

  return (
    <Formik
      initialValues={{firstName: '', lastName: '', email: ''}}
      onSubmit={values => console.log(values)}
      validate={validate}>
      {({handleChange, handleSubmit, errors, touched}) => {
        const signInHandler = () => {
          handleSubmit();
          dispatch(changeIsLoggedIn(true));
        };

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
              <Button onPress={signInHandler} title={t('Login')} />
            </View>
          </View>
        );
      }}
    </Formik>
  );
};
