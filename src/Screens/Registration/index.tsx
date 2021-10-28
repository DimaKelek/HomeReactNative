import React, {FC} from 'react';
import {RegistrationProps} from '../../Navigation/Navigation.types';
import {RegistrationView} from './RegistrationView';
import {RegisterFormErrorsType, SignUpFormType} from './Register.types';
import {useDispatch} from 'react-redux';
import {signUpUser} from '../../Redux/Sagas/sagaActions';

export const RegistrationScreen: FC<RegistrationProps> = () => {
  const dispatch = useDispatch();

  const validate = (values: SignUpFormType) => {
    const errors: RegisterFormErrorsType = {};
    if (!values.email) {
      errors.email = 'Email is required!!';
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = 'Invalid email!!';
    }
    if (values.password !== values.confirmPassword) {
      errors.password = 'Passwords do not match';
      errors.confirmPassword = 'Passwords do not match';
    }
    if (!values.firstName) {
      errors.firstName = 'First name is required!!';
    }
    if (!values.lastName) {
      errors.lastName = 'Last name is required!!';
    }
    if (!values.password) {
      errors.password = 'Password is required!!';
    }
    if (!values.confirmPassword) {
      errors.confirmPassword = 'Confirm password is required!!';
    }
    return errors;
  };
  const signUpHandler = (values: SignUpFormType) => {
    dispatch(signUpUser(values));
  };
  return <RegistrationView validate={validate} signUpHandler={signUpHandler} />;
};
