import React, {FC} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {AuthView} from './AuthView';
import {FormErrorsType, SignInFormType} from './Auth.types';
import {signInUser} from 'sagas/sagaActions';
import {selectError} from 'redux/Auth/selectors';
import {AuthProps} from 'nav/types';
import {Alert} from 'react-native';
import {setError} from 'redux/Auth/actions';

export const AuthScreen: FC<AuthProps> = ({navigation}) => {
  const dispatch = useDispatch();
  const error = useSelector(selectError);

  const validate = (values: SignInFormType) => {
    const errors: FormErrorsType = {};
    if (!values.email) {
      errors.email = 'Email is required!!';
    }
    if (!values.password) {
      errors.password = 'Password is required!!';
    }
    return errors;
  };

  const signInHandler = (values: SignInFormType) => {
    dispatch(signInUser(values.email, values.password));
    error &&
      Alert.alert('Error', error.message, [
        {text: 'Sign Up', onPress: signUpHandler},
        {text: 'Cancel'},
      ]);
  };

  const signUpHandler = () => {
    navigation.navigate('Register');
    dispatch(setError(null));
  };

  return (
    <AuthView
      signInHandler={signInHandler}
      signUpHandler={signUpHandler}
      validate={validate}
      error={error}
    />
  );
};
