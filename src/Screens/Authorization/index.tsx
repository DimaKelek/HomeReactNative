import React, {FC, FormEvent} from 'react';
import {useDispatch} from 'react-redux';
import {AuthView} from './AuthView';
import {FormErrorsType, SubmitType} from './types';
import {changeIsLoggedIn} from '../../Redux/authReducer';

export const AuthScreen: FC<any> = () => {
  const dispatch = useDispatch();

  const validate = (values: any) => {
    const errors: FormErrorsType = {};
    if (!values.firstName) {
      errors.firstName = 'First Name is required!!';
    }
    return errors;
  };

  const signInHandler = (submit: SubmitType) => {
    submit();
    dispatch(changeIsLoggedIn(true));
  };

  return <AuthView signInHandler={signInHandler} validate={validate} />;
};
