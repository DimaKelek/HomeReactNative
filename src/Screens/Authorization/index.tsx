import React, {FC} from 'react';
import {useDispatch} from 'react-redux';
import {changeIsLoggedIn} from '../../Redux/Auth/actions';
import {AuthView} from './AuthView';
import {FormErrorsType, SubmitType} from './types';

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
